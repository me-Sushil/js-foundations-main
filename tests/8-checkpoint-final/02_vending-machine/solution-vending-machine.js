/* eslint-disable no-unused-vars */
class VM {
  constructor(inventory) {
    this.inventory = inventory;
  }
  sale(itemID) {
    const item = this.inventory[itemID];
    if (item && item.stock > 0) {
      item.stock -= 1;
      return `1 ${item.name} - Thank you and come again!`;
    } else {
      return "Item not available";
    }
  }
  stockTotal() {
    const stocktotal = Object.values(this.inventory).reduce(
      (acc, currentVal) => {
        return acc + currentVal.stock;
      },
      0
    );
    if (stocktotal === 0) {
      return "Out of Stock";
    } else if (stocktotal === 1) {
      return "1 item";
    } else {
      return `${stocktotal} item(s)`;
    }
  }
}
