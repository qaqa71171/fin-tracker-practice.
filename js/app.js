document.addEventListener('DOMContentLoaded', () => {

    // --- Логика страницы авторизации ---
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');

    if (showRegisterLink) {
        showRegisterLink.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.classList.add('hidden');
            registerForm.classList.remove('hidden');
        });
    }

    if (showLoginLink) {
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault();
            registerForm.classList.add('hidden');
            loginForm.classList.remove('hidden');
        });
    }

    // Валидация формы входа
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            let isValid = true;

            document.getElementById('emailError').textContent = '';
            document.getElementById('passwordError').textContent = '';

            if (!email.includes('@')) {
                document.getElementById('emailError').textContent = 'Некорректный email';
                isValid = false;
            }
            if (password.length < 6) {
                document.getElementById('passwordError').textContent = 'Минимум 6 символов';
                isValid = false;
            }

            if (isValid) {
                alert('Вход выполнен! (Имитация)');
                window.location.href = 'dashboard.html';
            }
        });
    }

    // Валидация формы регистрации
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('regName').value;
            if (name.length > 0) {
                alert('Регистрация прошла успешно!');
                registerForm.classList.add('hidden');
                loginForm.classList.remove('hidden');
            } else {
                alert('Пожалуйста, заполните все поля.');
            }
        });
    }

    // --- Логика модального окна для транзакций ---
    const modal = document.getElementById('transactionModal');
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.querySelector('.close-btn');
    const transactionForm = document.getElementById('transactionForm');

    if (openModalBtn) {
        openModalBtn.addEventListener('click', () => {
            modal.classList.add('active');
        });
    }

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.classList.remove('active');
            document.getElementById('modalSuccess').classList.add('hidden');
        });
    }
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.getElementById('modalSuccess').classList.add('hidden');
        }
    });

    // Обработка добавления транзакции
    if (transactionForm) {
        transactionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const amount = document.getElementById('amount').value;
            const category = document.getElementById('category').value;
            const type = document.getElementById('type').value;
            
            document.getElementById('amountError').textContent = '';

            if (amount <= 0) {
                document.getElementById('amountError').textContent = 'Сумма должна быть положительной';
                return;
            }

            const successMsg = document.getElementById('modalSuccess');
            successMsg.classList.remove('hidden');
            
            document.getElementById('amount').value = '';
            document.getElementById('category').value = '';
            
            console.log(`Добавлена транзакция: Тип=${type}, Сумма=${amount}, Категория=${category}`);
        });
    }
});
