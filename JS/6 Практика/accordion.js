function toggle() {
    var extra = document.getElementById('extra');
    var button = document.querySelector('.button');

    extra.classList.toggle('hidden');

    if (extra.classList.contains('hidden')) {
      button.innerText = 'More';
    } else {
      button.innerText = 'Less';
    }
}