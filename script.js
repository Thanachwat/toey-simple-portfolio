const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    
    if (document.body.classList.contains('light-theme')) {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
});
