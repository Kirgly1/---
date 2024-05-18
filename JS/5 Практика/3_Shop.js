class Product {
    constructor(name, quantity) {
      this.name = name;
      this.quantity = quantity;
    }
  }
  class StoreInventory {
    constructor(initialStock, deliveryOrder) {
      this.inventory = {};
      this.updateInventory(initialStock);
      this.updateInventory(deliveryOrder);
    }
  
    updateInventory(items) {
      for (let i = 0; i < items.length; i += 2) {
        const productName = items[i];
        const quantity = parseInt(items[i + 1]);
  
        if (this.inventory.hasOwnProperty(productName)) {
          this.inventory[productName].quantity += quantity;
        } else {
          const product = new Product(productName, quantity);
          this.inventory[productName] = product;
        }
      }
    }
  
    displayInventory() {
      for (const [productName, product] of Object.entries(this.inventory)) {
        console.log(`${productName} -> ${product.quantity}`);
      }
    }
  }
  
  const input = [
    'Chips', '5', 'CocaCola', '9', 'Bananas',
    '14', 'Pasta', '4', 'Beer', '2'
  ];
  
  const input2 = [
    'Flour', '44', 'Oil', '12', 'Pasta', '7',
    'Tomatoes', '70', 'Bananas2', '31'
  ];
  
  const store = new StoreInventory(input, input2);
  store.displayInventory();  