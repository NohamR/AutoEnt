document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const saveButton = document.getElementById('saveButton');

    // Charger les valeurs précédemment enregistrées depuis le stockage local
    chrome.storage.local.get(['email', 'password'], function (data) {
        if (data.email) {
            emailInput.value = data.email;
        }
        if (data.password) {
            passwordInput.value = data.password;
        }
    });

    // Enregistrer les valeurs lors du clic sur le bouton "Enregistrer"
    saveButton.addEventListener('click', function () {
        const email = emailInput.value;
        const password = passwordInput.value;

        // Enregistrer les valeurs dans le stockage local de l'extension
        chrome.storage.local.set({ email, password }, function () {
            // Fermer la fenêtre contextuelle après l'enregistrement
            window.close();
        });
    });
});
