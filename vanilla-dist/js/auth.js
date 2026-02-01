// Auth Logic
import { app, auth } from './firebase-config.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const errorMsg = document.getElementById('error-msg');
const submitBtn = document.getElementById('submit-btn');

function showLoading(isLoading) {
    if (submitBtn) {
        submitBtn.disabled = isLoading;
        submitBtn.innerHTML = isLoading ? 'Processing...' : 'Submit';
    }
}

function showError(msg) {
    if (errorMsg) {
        errorMsg.textContent = msg;
        errorMsg.classList.remove('hidden');
    }
}

if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoading(true);
        errorMsg.classList.add('hidden');

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // AUTH BYPASS: Allow any password
        if (email) {
            localStorage.setItem('dummyUser', email);

            // Optional: Still try Firebase silently, but ignore errors? 
            // Better to just redirect immediately for "any password" feel.
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500); // Small delay for effect
        } else {
            showLoading(false);
            showError("Please enter an email");
        }
    });
}

if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        showLoading(true);
        errorMsg.classList.add('hidden');

        const email = document.getElementById('email').value;

        // AUTH BYPASS: Allow any password
        if (email) {
            localStorage.setItem('dummyUser', email);
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 500);
        } else {
            showLoading(false);
            showError("Please enter an email");
        }
    });
}
