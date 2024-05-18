function solve() {
    let text = document.getElementById('text').value
    let convention = document.getElementById('naming-convention').value
    let result = document.getElementById('result')
    if(convention=="Camel Case"){
      result.textContent=toCamelCase(text)
    }else if (convention=="Pascal Case"){
      result.textContent=toPascalCase(text)
    } else {
      result.textContent='Error!'
    }
  }
  
  function toCamelCase(string) {
    let words = string.toLowerCase().split(' ');
  
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return words.join('');
  }
  
  function toPascalCase(string) {
    let words = string.toLowerCase().split(' ');
  
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
  
    return words.join('');
  }