// Main JS - Navbar, Theme, UI interactions
import { app, auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// DOM Elements
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const authButtons = document.getElementById('auth-buttons');
const themeToggle = document.getElementById('theme-toggle');

// Mobile Menu Toggle
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Theme Toggle
// Check preference
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            localStorage.theme = 'dark';
        } else {
            localStorage.theme = 'light';
        }
    });
}


// Auth Logic (Firebase + LocalStorage Bypass)
function renderLoggedIn(email) {
    if (!authButtons) return;
    const username = email.split('@')[0];
    authButtons.innerHTML = `
        <span class="text-sm font-medium mr-2 hidden sm:inline">Hi, ${username}</span>
        <button id="logout-btn" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
            Log out
        </button>
    `;

    document.getElementById('logout-btn').addEventListener('click', () => {
        // Clear local storage bypass
        localStorage.removeItem('dummyUser');

        // Also sign out of Firebase just in case
        signOut(auth).then(() => {
            window.location.reload();
        }).catch((error) => {
            console.error(error);
            window.location.reload();
        });
    });
}

function renderLoggedOut() {
    if (!authButtons) return;
    authButtons.innerHTML = `
        <a href="login.html" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2">
            Log in
        </a>
        <a href="signup.html" class="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
            Sign up
        </a>
    `;
}

// 1. Synchronous check for dummy user (avoids UI flash)
const dummyUser = localStorage.getItem('dummyUser');
if (dummyUser) {
    renderLoggedIn(dummyUser);
}

// 2. Async check for Firebase user
onAuthStateChanged(auth, (user) => {
    if (user) {
        renderLoggedIn(user.email);
    } else {
        // Only render logged out if NO dummy user exists
        if (!localStorage.getItem('dummyUser')) {
            renderLoggedOut();
        }
    }
});
