function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
  
    function onClick() {
      const searchQuery = document.querySelector('#searchField').value.toLowerCase().trim();
  
      const rows = document.querySelectorAll('tbody tr');
  
      
      rows.forEach(row => {
        // Получаем текстовое содержимое каждой ячейки в строке
        const cellContents = Array.from(row.cells).map(cell => cell.textContent.toLowerCase().trim());
  
        const hasMatch = cellContents.some(content => content.includes(searchQuery));
  
        if (hasMatch) {
          row.classList.add('select');
        } else {
          row.classList.remove('select');
        }
      });
    }
  }