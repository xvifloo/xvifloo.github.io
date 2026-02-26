const LangSwitcher = {
    currentLang: 'en',
    
    init() {
        this.currentLang = localStorage.getItem('xvifloo_language') || 'en';
        this.applyLanguage(this.currentLang);
        
        document.getElementById('langToggle')?.addEventListener('click', () => this.openModal());
        this.setupModal();
    },
    
    setupModal() {
        const modal = document.getElementById('langModal');
        const overlay = document.getElementById('langModalOverlay');
        const closeBtn = document.getElementById('closeLangModal');
        
        if (!modal || !overlay) return;
        
        overlay.addEventListener('click', () => this.closeModal());
        closeBtn?.addEventListener('click', () => this.closeModal());
        
        document.querySelectorAll('.lang-option').forEach(btn => {
            btn.addEventListener('click', () => {
                this.setLanguage(btn.dataset.lang);
                this.closeModal();
            });
        });
    },
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('xvifloo_language', lang);
        this.applyLanguage(lang);
    },
    
    applyLanguage(lang) {
        document.documentElement.lang = lang;
        
        if (lang === 'bn') {
            document.body.style.fontFamily = 'AmarBangla, sans-serif';
        } else {
            document.body.style.fontFamily = 'ProximaNova, sans-serif';
        }
    },
    
    openModal() {
        document.getElementById('langModal').style.display = 'block';
        document.getElementById('langModalOverlay').style.display = 'block';
        document.body.style.overflow = 'hidden';
    },
    
    closeModal() {
        document.getElementById('langModal').style.display = 'none';
        document.getElementById('langModalOverlay').style.display = 'none';
        document.body.style.overflow = '';
    }
};

document.addEventListener('DOMContentLoaded', () => LangSwitcher.init());