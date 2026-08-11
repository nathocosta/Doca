// --- Dark Mode Logic ---
const htmlElement = document.documentElement;
const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

// Function to apply theme
function applyTheme(isDark) {
    if (isDark) {
        htmlElement.classList.add('dark');
        darkModeIcon.textContent = 'light_mode';
        darkModeIcon.setAttribute('title', 'Ativar modo claro');
    } else {
        htmlElement.classList.remove('dark');
        darkModeIcon.textContent = 'dark_mode';
        darkModeIcon.setAttribute('title', 'Ativar modo escuro');
    }
}

// Initialize theme based on localStorage or system preferences
const storedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialIsDark = storedTheme === 'dark' || (!storedTheme && systemPrefersDark);
applyTheme(initialIsDark);

// Event listener for theme toggle button
darkModeToggle.addEventListener('click', () => {
    const isCurrentlyDark = htmlElement.classList.contains('dark');
    const newIsDark = !isCurrentlyDark;
    applyTheme(newIsDark);
    localStorage.setItem('theme', newIsDark ? 'dark' : 'light');
});


// --- Mascot Interactive Logic (Removida pois o mascote agora é estático) ---


// --- About Modal Logic ---
const aboutModal = document.getElementById('about-modal');

function openAboutModal() {
    aboutModal.classList.remove('hidden');
    // Allow layout repaint before transitioning
    setTimeout(() => {
        aboutModal.classList.add('modal-active');
    }, 10);
}

function closeAboutModal() {
    aboutModal.classList.remove('modal-active');
    // Wait for transition to finish before hiding element
    setTimeout(() => {
        aboutModal.classList.add('hidden');
    }, 300);
}

// Close on clicking backdrop
aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
        closeAboutModal();
    }
});


// --- Simulated Tool Loading Logic ---
const toolCards = document.querySelectorAll('main section.grid a');
const loadingScreen = document.getElementById('loading-screen');

function showLoading() {
    loadingScreen.classList.remove('hidden');
    setTimeout(() => {
        loadingScreen.classList.add('modal-active');
    }, 10);

    // Automatically hide after 3 seconds (simulation)
    setTimeout(() => {
        hideLoading();
    }, 3000);
}

function hideLoading() {
    loadingScreen.classList.remove('modal-active');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 300);
}

toolCards.forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault(); // Stop navigation
        showLoading();
    });
});
