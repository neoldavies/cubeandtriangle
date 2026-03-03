/* ─── Cube & Triangle — Mobile Navigation ────────────────────────────────────
   Single-source mobile menu for all pages.
   Tested targets: iOS Safari 14+, Android Chrome, Samsung Internet.

   Strategy
   ─────────
   • Overrides all inline onclick handlers so there's only one code path.
   • Uses visibility + transform (never display:none) for smooth, reliable
     transitions on WebKit/Blink.
   • Creates the overlay element dynamically if it isn't in the HTML
     (inner pages omit it; index.html has it).
   • Body scroll is locked on open and always restored on close.
   ─────────────────────────────────────────────────────────────────────────── */

(function () {
  'use strict';

  function initMenu() {
    var ham = document.getElementById('hamburger');
    var nav = document.getElementById('navLinks');
    if (!ham || !nav) return;

    /* Ensure overlay exists — inner pages don't have one in the HTML */
    var overlay = document.getElementById('navOverlay');
    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id        = 'navOverlay';
      overlay.className = 'nav-overlay';
      document.body.appendChild(overlay);
    }

    /* ── State helpers ── */
    function openMenu() {
      nav.classList.add('open');
      overlay.classList.add('active');
      ham.setAttribute('aria-expanded', 'true');
      ham.setAttribute('aria-label', 'Close menu');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      nav.classList.remove('open');
      overlay.classList.remove('active');
      ham.setAttribute('aria-expanded', 'false');
      ham.setAttribute('aria-label', 'Open menu');
      document.body.style.overflow = '';
    }

    /* ── Kill every inline onclick so nothing fires twice ── */
    ham.onclick     = null;
    nav.onclick     = null;
    overlay.onclick = null;

    /* ── Single hamburger toggle ── */
    ham.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.contains('open') ? closeMenu() : openMenu();
    });

    /* ── Overlay tap / click → close ── */
    overlay.addEventListener('click', closeMenu);

    /* ── Any link inside the nav → close then navigate ──
       Delegated so it catches dropdown links too.
       Closing first then navigating works for both same-page
       anchors (#section) and cross-page links (food.html). */
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });

    /* ── Escape key → close + return focus ── */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        closeMenu();
        ham.focus();
      }
    });
  }

  /* Run immediately if DOM is ready, otherwise wait */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }
}());
