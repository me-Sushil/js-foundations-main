/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('vending machine (VM) class', () => {
  let drinkInventory;
  let drinkVendingMachine;

  beforeEach(() => {
    drinkInventory = {
      1: { name: 'Sunny Delight', stock: 5 },
      2: { name: 'Diet Soda', stock: 3 },
      3: { name: 'Bottled Water', stock: 4 },
    };
    drinkVendingMachine = new VM(drinkInventory);
  });
  it('returns an instance of the Vending Machine (VM) class', () => {
    expect(drinkVendingMachine instanceof VM).toBe(true);
  });

  it('assigns the inventory object to the inventory property', () => {
    expect(drinkVendingMachine.inventory).toEqual(drinkInventory);
  });

  it('has the following class properties', () => {
    expect(typeof drinkVendingMachine.sale).toBe('function');
    expect(typeof drinkVendingMachine.stockTotal).toBe('function');
    expect(Object.keys(drinkVendingMachine)).toEqual(['inventory']);
  });

  it('the sale method removes 1 from the stock total that matches the itemID', () => {
    const itemID = 3;
    expect(drinkVendingMachine.sale(itemID)).toBe(
      '1 Bottled Water - Thank you and come again!'
    );
    expect(drinkInventory[itemID].stock).toBe(3);
  });

  it('the stockTotal method returns the total amount of items in stock', () => {
    const snackInventory = {
      1: { name: 'Pringles', stock: 0 },
      2: { name: 'M&Ms', stock: 0 },
      3: { name: 'KitKat', stock: 0 },
    };
    const snackVendingMachine = new VM(snackInventory);

    expect(drinkVendingMachine.stockTotal()).toBe('12 item(s)');
    expect(snackVendingMachine.stockTotal()).toBe('Out of Stock');
  });

  it('the stockTotal method calls Array.prototype.reduce to calculate the total amount of items', () => {
    spyOn(Array.prototype, 'reduce').and.callThrough();
    drinkVendingMachine.stockTotal();
    expect(Array.prototype.reduce).toHaveBeenCalled();
  });
});
