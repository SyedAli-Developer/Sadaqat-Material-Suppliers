// Default language set karein
let currentLang = localStorage.getItem('userLang') || 'ur';

// Function jo JSON file se data layega
async function updateLanguage(lang) {
    try {
        const response = await fetch(`${lang}.json`);
        const data = await response.json();

        // UI update karna
        document.getElementById('main-title').innerText = data.title;
        document.getElementById('main-desc').innerText = data.desc;
        document.getElementById('lang-btn').innerText = data.btnText;
        
        // Direction aur Lang attribute update karna
        document.documentElement.dir = data.dir;
        document.documentElement.lang = data.lang;

        // Preference save karna
        localStorage.setItem('userLang', lang);
        currentLang = lang;
    } catch (error) {
        console.error("Error loading language file:", error);
    }
}

// Button Click Event
document.getElementById('lang-btn').addEventListener('click', () => {
    const nextLang = currentLang === 'ur' ? 'en' : 'ur';
    updateLanguage(nextLang);
});

// Page load par default lang chalao
window.onload = () => updateLanguage(currentLang);