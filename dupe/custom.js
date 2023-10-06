// custom.js
document.addEventListener('DOMContentLoaded', function () {
    // Get a reference to the form and the button
    const form = document.getElementById('loginForm');
    const saveButton = document.getElementById('saveButton');
 
    // Add an event listener to the button click event
    saveButton.addEventListener('click', function (event) {
       // Prevent the default form submission
       event.preventDefault();
 
       // You can add your custom logic here
       // For example, you can validate the form inputs and perform other actions
       // If you want to submit the form via AJAX, you can do that here.
 
       // For demonstration purposes, let's just log a message
       console.log('Form submission prevented.');
    });
 });
 