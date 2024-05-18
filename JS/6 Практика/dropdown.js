function addItem() {
    var newText = document.getElementById('newItemText').value;
    var newValue = document.getElementById('newItemValue').value;

    if (newText && newValue) {
      var selectMenu = document.getElementById('menu');
      var option = document.createElement('option');
      option.text = newText;
      option.value = newValue;
      selectMenu.add(option);
    } else {
      alert('Please enter both text and value.');
    }
}