function search() {
    var input = document.getElementById('searchText').value.toLowerCase();
    var towns = document.getElementById('towns').getElementsByTagName('li');
    var resultDiv = document.getElementById('result');
    var matches = 0;
 
    for (var i = 0; i < towns.length; i++) {
      var townName = towns[i].innerText.toLowerCase();
      if (townName.includes(input)) {
        towns[i].style.fontWeight = 'bold';
        towns[i].style.textDecoration = 'underline';
        matches++;
      } else {
        towns[i].style.fontWeight = 'normal';
        towns[i].style.textDecoration = 'none';
      }
    }
 
    resultDiv.innerHTML = matches + ' matches found';
 } 