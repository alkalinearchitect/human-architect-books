/**
 * Matrix Intro — Human Architect
 * Loaded with defer — runs after DOM parsed, before DOMContentLoaded.
 * Self-contained, no dependencies, no buttons.
 *
 * Sequence:
 *   1. Cover screen with black overlay (instant)
 *   2. Terminal types: "Wake up..." → "The Matrix has you." →
 *      "If you made it this far..." → "you are one of the chosen." → "Break free."
 *   3. Dissolves into green Matrix rain + left headline
 *   4. Fades out and reveals site
 *   Shows once per session.
 */
;(function () {
  'use strict';

  var SKIP = false;
  try { if (sessionStorage.getItem('matrixintro-done')) SKIP = true; } catch(e) {}
  if (SKIP) return;

  // ── Palette ──
  var TERM_BG    = '#000000';
  var TERM_GREEN  = '#00ff41';
  var TERM_DIM    = '#00cc33';
  var RAIN_GREEN  = '#00ff41';
  var RAIN_DIM    = '#006618';

  // ── Lines to type ──
  var LINES = [
    { text: 'Wake up...',                      delay: 300  },
    { text: 'The Matrix has you.',              delay: 1000 },
    { text: 'If you made it this far...',       delay: 1800 },
    { text: 'you are one of the chosen.',       delay: 900  },
    { text: 'Break free.',                      delay: 700  },
  ];

  var HEADLINES = [
    'YOU ARE ONE OF THE CHOSEN',
    'BREAK FREE',
    'TIME IS RUNNING OUT',
  ];

  // ── Create overlay IMMEDIATELY ──
  var overlay = document.createElement('div');
  overlay.id = '-mo';
  overlay.style.cssText = [
    'position:fixed','left:0','top:0','width:100vw','height:100vh',
    'z-index:2147483647','background:' + TERM_BG,'overflow:hidden',
    'font-family:monospace',
    'transition:opacity 2s ease-out',
  ].join(';') + ';';

  // Terminal container
  var termWrap = document.createElement('div');
  termWrap.style.cssText = 'position:absolute;inset:0;display:flex;align-items:center;justify-content:center';
  var termBlock = document.createElement('div');
  termBlock.style.cssText = 'padding:20px;max-width:620px;width:100%';

  var lineEls = [];
  var i;
  for (i = 0; i < LINES.length; i++) {
    var el = document.createElement('div');
    el.style.cssText = 'font-size:15px;line-height:2;color:' + TERM_GREEN + ';opacity:0;transition:opacity .15s;' + (i >= 2 ? 'color:' + TERM_DIM : '');
    el.setAttribute('data-txt', LINES[i].text);
    el.textContent = '';
    termBlock.appendChild(el);
    lineEls.push(el);
  }
  var cursor = document.createElement('span');
  cursor.style.cssText = 'display:inline-block;width:8px;height:15px;background:' + TERM_GREEN + ';margin-left:2px;vertical-align:middle;animation:mb .7s step-end infinite';
  termBlock.appendChild(cursor);
  termWrap.appendChild(termBlock);

  // Rain
  var rainWrap = document.createElement('div');
  rainWrap.style.cssText = 'position:absolute;inset:0;opacity:0;transition:opacity .6s ease';
  var rainCanvas = document.createElement('canvas');
  rainCanvas.style.cssText = 'position:absolute;width:100%;height:100%';
  rainWrap.appendChild(rainCanvas);

  // Headline
  var hlWrap = document.createElement('div');
  hlWrap.style.cssText = 'position:absolute;left:56px;top:50%;transform:translateY(-50%);z-index:2;opacity:0;transition:opacity 1s ease .3s;max-width:400px';
  for (i = 0; i < HEADLINES.length; i++) {
    var hl = document.createElement('div');
    hl.style.cssText = 'font-family:Helvetica,Arial,sans-serif;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:' + TERM_GREEN + ';margin-bottom:16px;opacity:0;transform:translateX(-10px);transition:opacity .5s,transform .5s';
    hl.textContent = HEADLINES[i];
    hlWrap.appendChild(hl);
  }

  overlay.appendChild(rainWrap);
  overlay.appendChild(hlWrap);
  overlay.appendChild(termWrap);

  // Inject cursor blink keyframes
  var kf = document.createElement('style');
  kf.textContent = '@keyframes mb{0%,100%{opacity:1}50%{opacity:0}}';
  document.head.appendChild(kf);

  // Append overlay to body — body exists because defer
  document.body.appendChild(overlay);

  // ── Type lines ──
  var timers = [];

  function typeLine(idx, done) {
    if (idx >= LINES.length) { done(); return; }
    var el = lineEls[idx];
    var txt = el.getAttribute('data-txt');
    var ci = 0;
    el.style.opacity = '1';
    function tick() {
      if (ci < txt.length) {
        el.textContent = txt.substring(0, ++ci);
        timers.push(setTimeout(tick, 36 + Math.random() * 12));
      } else {
        timers.push(setTimeout(function() { typeLine(idx + 1, done); }, LINES[idx].delay));
      }
    }
    tick();
  }

  // ── Rain ──
  var raf = null;
  var cols = [];

  function initRain() {
    function resize() {
      rainCanvas.width = window.innerWidth;
      rainCanvas.height = window.innerHeight;
      buildCols();
    }
    window.addEventListener('resize', resize);
    resize();
    var ctx = rainCanvas.getContext('2d');
    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0.055)';
      ctx.fillRect(0, 0, rainCanvas.width, rainCanvas.height);
      ctx.font = '13px monospace';
      var i;
      for (i = 0; i < cols.length; i++) {
        var c = cols[i];
        ctx.fillStyle = Math.random() > 0.75 ? RAIN_DIM : RAIN_GREEN;
        ctx.fillText(String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96)), c.x, c.y);
        c.y += c.s;
        if (c.y > rainCanvas.height + 30) {
          c.y = -20 - Math.random() * 300;
          c.s = 1.2 + Math.random() * 3;
        }
      }
      raf = requestAnimationFrame(draw);
    }
    raf = requestAnimationFrame(draw);
  }

  function buildCols() {
    var fs = 13;
    var n = Math.ceil(rainCanvas.width / (fs * 1.6)) + 1;
    cols = [];
    var i;
    for (i = 0; i < n; i++) {
      cols.push({
        x: i * fs * 1.6,
        y: Math.random() * rainCanvas.height * -1,
        s: 1.2 + Math.random() * 3,
      });
    }
  }

  var t2, t3, t4;

  function phase2() {
    termWrap.style.transition = 'opacity .8s';
    termWrap.style.opacity = '0';
    rainWrap.style.opacity = '1';
    hlWrap.style.opacity = '1';
    var hls = hlWrap.querySelectorAll('div');
    for (i = 0; i < hls.length; i++) {
      (function(idx, el) {
        setTimeout(function() { el.style.opacity = '1'; el.style.transform = 'translateX(0)'; }, idx * 350);
      })(i, hls[i]);
    }
    initRain();
    t3 = setTimeout(phase3, 5000);
  }

  function phase3() {
    overlay.style.opacity = '0';
    t4 = setTimeout(cleanup, 2200);
  }

  function cleanup() {
    try { sessionStorage.setItem('matrixintro-done', '1'); } catch(e) {}
    if (raf) cancelAnimationFrame(raf);
    timers.forEach(function(t) { clearTimeout(t); });
    clearTimeout(t2); clearTimeout(t3); clearTimeout(t4);
    if (overlay.parentNode) overlay.remove();
    if (kf.parentNode) kf.remove();
  }

  // Start
  t2 = setTimeout(function() {
    typeLine(0, function() {
      cursor.style.display = 'none';
      clearTimeout(t2);
      t2 = setTimeout(phase2, 500);
    });
  }, 200);

})();
