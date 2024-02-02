document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const saveButton = document.getElementById('saveButton');

    chrome.storage.local.get(['email', 'password'], function (data) {
        if (data.email) {
            emailInput.value = data.email;
        }
        if (data.password) {
            passwordInput.value = data.password;
        }
    });

    saveButton.addEventListener('click', function () {
        const email = emailInput.value;
        const password = passwordInput.value;

        chrome.storage.local.set({ email, password }, function () {
            window.close();
        });
    });
});
