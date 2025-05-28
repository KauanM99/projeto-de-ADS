// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Cookie consent logic
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = name + '=' + encodeURIComponent(value) + '; expires=' + expires + '; path=/';
}

function getCookie(name) {
  return document.cookie.split('; ').reduce((r, v) => {
    const parts = v.split('=');
    return parts[0] === name ? decodeURIComponent(parts[1]) : r
  }, '');
}

function showCookieBanner() {
  const banner = document.getElementById('cookie-consent-banner');
  if (!banner) return;
  banner.hidden = false;
}

function hideCookieBanner() {
  const banner = document.getElementById('cookie-consent-banner');
  if (!banner) return;
  banner.hidden = true;
}

function initCookieConsent() {
  const consent = getCookie('cookie_consent');
  if (!consent) {
    showCookieBanner();
  }
  const acceptBtn = document.getElementById('accept-cookies');
  const rejectBtn = document.getElementById('reject-cookies');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      setCookie('cookie_consent', 'accepted', 365);
      hideCookieBanner();
      // Here you can add code to enable cookies or tracking scripts
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', () => {
      setCookie('cookie_consent', 'rejected', 365);
      hideCookieBanner();
      // Here you can add code to disable cookies or tracking scripts
    });
  }
}

document.addEventListener('DOMContentLoaded', initCookieConsent);
