'use-strict';

const LoginApp = {
  init() {
    localStorage.setItem('username', 'superhandsome@gmail.com');
    localStorage.setItem('password', 'ilovecoding123');
    
    const form = document.getElementById('login-form');
    if (form) form.addEventListener('submit', e => this.handleLogin(e));
  },
  handleLogin(e) {
    e.preventDefault();

    const inputUser = document.getElementById('email').value.trim();
    const inputPass = document.getElementById('password').value.trim();

    const storedUser = localStorage.getItem('username');
    const storedPass = localStorage.getItem('password');

    if (inputUser === storedUser && inputPass === storedPass) {
      localStorage.setItem('isLoggedIn', 'true');
      location.href = '../home.html';
    } else {
      this.showError('Incorrect email or password, please try again.');
    }
  },
  showError(msg) {
    const tip = document.getElementById('errorMessage');
    tip.textContent = msg;
    setTimeout(() => tip.textContent = '', 3000);
  }
};

LoginApp.init();