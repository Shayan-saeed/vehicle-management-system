document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.querySelector('form button[type="submit"]');
    
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            alert('Form submitted!');
        });
    }
});
