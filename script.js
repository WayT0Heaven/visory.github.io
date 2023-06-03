const nameInput = document.getElementById('name');

nameInput.addEventListener('input', function() {
    const name = this.value.trim();

    if (name.length < 3) {
        this.setCustomValidity('Name must be at least 3 characters long.');
    } else if (/\s/.test(name)) {
        this.setCustomValidity('Spaces are not allowed in the name.');
    } else if (/[^A-Za-z0-9]/.test(name)) {
        this.setCustomValidity('Special characters are not allowed in the name.');
    } else {
        this.setCustomValidity('');
    }
});