const THEME_KEY = 'theme';
const themeBtn = document.getElementById('theme-switch');

function applyTheme(theme){
    document.documentElement.setAttribute('data-bs-theme', theme);
    themeBtn.innerHTML = theme === 'dark'
        ? '<i class="bi bi-sun"></i>'
        : '<i class="bi bi-moon-stars"></i>';
    themeBtn.setAttribute('aria-label', theme === 'dark' ? 'Light mode' : 'Dark mode');
}

themeBtn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem(THEME_KEY, next); } catch(e) {}
});

applyTheme(document.documentElement.getAttribute('data-bs-theme') || 'light');
