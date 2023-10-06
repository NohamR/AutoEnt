function clickButton() {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    chrome.storage.local.get(['email', 'password'], function (data) {
        if (data.email) {
            if (emailInput) {
                emailInput.value = data.email;
            }
        }
        if (data.password) {
            if (passwordInput) {
                passwordInput.value = data.password;
            }
        }

        const button = document.querySelector("button.flex-magnet-bottom-right");
        if (button) {
            button.click();
            
            chrome.runtime.sendMessage({ updateBadge: true, badgeText: "+ 1" });
        }
    });
}

setInterval(clickButton, 1000);
