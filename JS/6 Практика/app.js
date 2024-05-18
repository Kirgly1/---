function lockedProfile() {
    const showButtons = document.querySelectorAll('.profile button');

    showButtons.forEach(button => {
        button.addEventListener('click', function () {
            const profile = this.closest('.profile');
            const unlockRadio = profile.querySelector('input[value="unlock"]');
            const hiddenFields = profile.querySelector('.profile div');

            if (unlockRadio.checked) {
                hiddenFields.classList.toggle('hidden');
                hiddenFields.style.display = hiddenFields.classList.contains('hidden') ? 'none' : 'inline-block'
                button.textContent = hiddenFields.classList.contains('hidden') ? 'Show more' : 'Hide it';
            }
        });
    });
}