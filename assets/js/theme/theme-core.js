const ThemeCore = {
    init() {
        const savedTheme = localStorage.getItem('xvifloo_theme') || 'system';
        this.setTheme(savedTheme);
        
        document.getElementById('themeToggle')?.addEventListener('click', () => this.toggleTheme());
        
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
            if (this.currentTheme === 'system') this.applySystemTheme();
        });
    },
    
    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('xvifloo_theme', theme);
        
        if (theme === 'system') {
            this.applySystemTheme();
        } else {
            this.applyTheme(theme);
        }
        
        this.updateIcons();
    },
    
    applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        
        // Enable/disable theme CSS files
        document.getElementById('theme-light').disabled = theme !== 'light';
        document.getElementById('theme-dark').disabled = theme !== 'dark';
    },
    
    applySystemTheme() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.applyTheme(prefersDark ? 'dark' : 'light');
    },
    
    toggleTheme() {
        if (this.currentTheme === 'light') {
            this.setTheme('dark');
        } else if (this.currentTheme === 'dark') {
            this.setTheme('system');
        } else {
            this.setTheme('light');
        }
    },
    
    updateIcons() {
        const sun = document.querySelector('.sun-icon');
        const moon = document.querySelector('.moon-icon');
        if (!sun || !moon) return;
        
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        sun.style.display = isDark ? 'none' : 'block';
        moon.style.display = isDark ? 'block' : 'none';
    }
};

document.addEventListener('DOMContentLoaded', () => ThemeCore.init());