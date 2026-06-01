/**
 * Matrix Intro — Human Architect
 * Self-contained, self-installing. No dependencies. No buttons.
 *
 * Sequence:
 *   1. Terminal types: "Wake up..." → "The Matrix has you." →
 *      "If you made it this far..." → "you are one of the chosen." → "Break free."
 *   2. Dissolves into green Matrix rain with left-side headline overlay
 *   3. Fades out and reveals the site
 *   Shows once per session.
 */
;(function () {
  'use strict';

  // ── Guard: once per session ──
  if (sessionStorage.getItem('matrixintro-done')) return;

  // ── Config ──
  const LINES = [
    { text: 'Wake up...',                      delay: 400  },
    { text: 'The Matrix has you.',              delay: 1200 },
    { text: 'If you made it this far...',       delay: 2000 },
    { text: 'you are one of the chosen.',       delay: 1000 },
    { text: 'Break free.',                      delay: 800  },
  ];

  const HEADLINE_LINES = [
    'YOU ARE ONE OF THE CHOSEN',
    'BREAK FREE',
    'TIME IS RUNNING OUT',
  ];

  const TERM_BG      = '#0a0a0a';
  const TERM_GREEN   = '#00ff41';
  const TERM_DIM     = '#00cc33';
  const RAIN_COLOR   = '#00ff41';
  const RAIN_DIM     = '#009922';
  const FADE_DURATION = 2400;
  const TYPE_SPEED    = 38;

  // ── Inject base styles ──
  const style = document.createElement('style');
  style.textContent = [
    '#matrix-intro-overlay{position:fixed;inset:0;z-index:999999;',
    'background:' + TERM_BG + ';overflow:hidden;',
    'font-family:"Courier New","SF Mono","Fira Code",monospace;',
    'transition:opacity ' + FADE_DURATION + 'ms ease-out}',
    '#matrix-intro-overlay.fade-out{opacity:0;pointer-events:none}',
    '#matrix-terminal{position:absolute;inset:0;',
    'display:flex;align-items:center;justify-content:center}',
    '.matrix-term-block{padding:40px 48px;max-width:680px;width:100%}',
    '.matrix-term-line{font-size:15px;line-height:1.8;',
    'color:' + TERM_GREEN + ';opacity:0;transition:opacity .15s ease;',
    'white-space:pre-wrap;word-break:break-word}',
    '.matrix-term-line.visible{opacity:1}',
    '.matrix-term-line.dim{color:' + TERM_DIM + '}',
    '.matrix-cursor{display:inline-block;width:9px;height:16px;',
    'background:' + TERM_GREEN + ';margin-left:2px;vertical-align:middle;',
    'animation:mcur-blink .7s step-end infinite}',
    '@keyframes mcur-blink{0%,100%{opacity:1}50%{opacity:0}}',
    '#matrix-rain{position:absolute;inset:0;opacity:0;transition:opacity .6s ease}',
    '#matrix-rain.active{opacity:1}',
    '#matrix-rain-canvas{position:absolute;inset:0}',
    '#matrix-headline{position:absolute;left:56px;top:50%;transform:translateY(-50%);',
    'z-index:2;opacity:0;transition:opacity 1s ease .3s;max-width:420px}',
    '#matrix-headline.active{opacity:1}',
    '.mh-line{font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;',
    'font-size:11px;letter-spacing:4px;text-transform:uppercase;',
    'color:' + TERM_GREEN + ';margin-bottom:18px;',
    'opacity:0;transform:translateX(-12px);',
    'transition:opacity .6s ease,transform .6s ease}',
    '.mh-line.vis{opacity:1;transform:translateX(0)}',
    '@media(max-width:640px){',
    '#matrix-headline{left:20px;max-width:calc(100% - 40px)}',
    '.mh-line{font-size:9px;letter-spacing:3px;margin-bottom:12px}',
    '.matrix-term-block{padding:24px 20px}',
    '.matrix-term-line{font-size:13px}}',
  ].join('');
  document.head.appendChild(style);

  // ── Build overlay DOM ──
  const overlay = document.createElement('div');
  overlay.id = 'matrix-intro-overlay';

  const terminal = document.createElement('div');
  terminal.id = 'matrix-terminal';
  const termBlock = document.createElement('div');
  termBlock.className = 'matrix-term-block';
  const lineEls = [];

  LINES.forEach(function(l, i) {
    const el = document.createElement('div');
    el.className = 'matrix-term-line' + (i < 2 ? '' : ' dim');
    el.dataset.full = l.text;
    el.textContent = '';
    termBlock.appendChild(el);
    lineEls.push(el);
  });

  const cursor = document.createElement('span');
  cursor.className = 'matrix-cursor';
  termBlock.appendChild(cursor);
  terminal.appendChild(termBlock);

  const rainWrap = document.createElement('div');
  rainWrap.id = 'matrix-rain';
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix-rain-canvas';
  rainWrap.appendChild(canvas);

  const headline = document.createElement('div');
  headline.id = 'matrix-headline';
  HEADLINE_LINES.forEach(function(t) {
    const el = document.createElement('div');
    el.className = 'mh-line';
    el.textContent = t;
    headline.appendChild(el);
  });

  overlay.appendChild(rainWrap);
  overlay.appendChild(headline);
  overlay.appendChild(terminal);

  // ── Append overlay (handle body not ready yet) ──
  function appendOverlay() {
    if (document.body) {
      document.body.appendChild(overlay);
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.appendChild(overlay);
      // Will fix once body exists
      var obs = new MutationObserver(function() {
        if (document.body) {
          obs.disconnect();
          document.body.appendChild(overlay);
          document.body.style.overflow = 'hidden';
        }
      });
      obs.observe(document.documentElement, { childList: true });
    }
  }
  appendOverlay();

  // ── Phase 1: Terminal typing ──
  let charTimers = [];

  function typeLine(lineIdx, done) {
    if (lineIdx >= LINES.length) { done(); return; }
    const el = lineEls[lineIdx];
    const text = el.dataset.full;
    let ci = 0;
    el.classList.add('visible');
    function tick() {
      if (ci < text.length) {
        el.textContent = text.slice(0, ++ci);
        charTimers.push(setTimeout(tick, TYPE_SPEED + Math.random() * 10));
      } else {
        charTimers.push(setTimeout(function() {
          typeLine(lineIdx + 1, done);
        }, LINES[lineIdx].delay));
      }
    }
    tick();
  }

  // ── Phase 2: Matrix rain + headline ──
  let animFrame = null;
  let rainCols = [];

  function startRain() {
    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initCols();
    }
    window.addEventListener('resize', resize);
    resize();

    var mhEls = headline.querySelectorAll('.mh-line');
    Array.prototype.forEach.call(mhEls, function(el, i) {
      setTimeout(function() { el.classList.add('vis'); }, i * 400);
    });

    var ctx = canvas.getContext('2d');
    var lastT = 0;
    function draw(t) {
      if (!lastT) lastT = t;
      ctx.fillStyle = 'rgba(10,10,10,0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '14px monospace';
      for (var i = 0; i < rainCols.length; i++) {
        var col = rainCols[i];
        var ch = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96));
        ctx.fillStyle = Math.random() > 0.7 ? RAIN_DIM : RAIN_COLOR;
        ctx.fillText(ch, col.x, col.y);
        col.y += col.speed;
        if (col.y > canvas.height + 40) {
          col.y = -20 - Math.random() * 200;
          col.speed = 1.5 + Math.random() * 3.5;
        }
      }
      animFrame = requestAnimationFrame(draw);
    }
    animFrame = requestAnimationFrame(draw);
  }

  function initCols() {
    var fontSize = 14;
    var colCount = Math.ceil(canvas.width / (fontSize * 1.5));
    rainCols = [];
    for (var i = 0; i < colCount; i++) {
      rainCols.push({
        x: i * fontSize * 1.5,
        y: Math.random() * canvas.height * -1,
        speed: 1.5 + Math.random() * 3.5,
      });
    }
  }

  // ── Phase sequence ──
  var phase2Timer = null, phase3Timer = null, cleanupTimer = null;

  function goToPhase2() {
    terminal.style.transition = 'opacity 0.8s ease';
    terminal.style.opacity = '0';
    rainWrap.classList.add('active');
    headline.classList.add('active');
    startRain();
    phase3Timer = setTimeout(goToPhase3, 5200);
  }

  function goToPhase3() {
    overlay.classList.add('fade-out');
    cleanupTimer = setTimeout(cleanup, FADE_DURATION + 200);
  }

  function cleanup() {
    sessionStorage.setItem('matrixintro-done', '1');
    if (animFrame) cancelAnimationFrame(animFrame);
    charTimers.forEach(clearTimeout);
    clearTimeout(phase2Timer);
    clearTimeout(phase3Timer);
    clearTimeout(cleanupTimer);
    if (overlay.parentNode) overlay.remove();
    document.body.style.overflow = '';
  }

  // ── Kick off ──
  charTimers.push(setTimeout(function() {
    typeLine(0, function() {
      cursor.style.display = 'none';
      clearTimeout(phase2Timer);
      phase2Timer = setTimeout(goToPhase2, 600);
    });
  }, 300));

})();
