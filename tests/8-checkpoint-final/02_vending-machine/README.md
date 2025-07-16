### Vending Maching

#### Points: 5.00

<hr>

### Description:

Create a class called Vending Machine (VM) that returns an instance of a vending machine. The Vending Machine instance contains an inventory property which is an object that holds the name of inventory items and the total amount of stock of each item.

The Vending Machine (VM) class also contains the following class methods:

- `sale`: The sale method accepts an `itemID` as an argument and returns a string that represents if the item is dispensed from the machine, if it is out of stock, or if the `itemID` is an invalid number.

- `stockTotal`: The `stockTotal` method computes the total amount of items in the vending and returns a string of how many items or if the vending machine is completely out of stock.

For Example:

```js
const snacksVendingMachine = VM({
   1: { name: 'Pringles', stock: 0 },
   2: { name: 'M&Ms', stock: 0 },
   3: { name: 'KitKat', stock: 0 }
})

console.log(snacksVendingMachine.inventory);


// The statement above logs:

{
  1: { name: 'Pringles', stock: 0 },
  2: { name: 'M&Ms', stock: 0 },
  3: { name: 'KitKat', stock: 0 }
}

```

Sale Method:

```js
const snacksVendingMachine = VM({
  1: { name: 'Pringles', stock: 1 },
  2: { name: 'M&Ms', stock: 0 },
  3: { name: 'KitKat', stock: 0 },
});

snacksVendingMachine.sale(1); // RETURNS: `1 Pringles - Thank you and come again!`;
snacksVendingMAchine.sale(3); // RETURNS: M&Ms is out of stock :( Come back soon!
```

Stock Total Method:

```js
const snacksVendingMachine = VM({
  1: { name: 'Pringles', stock: 1 },
  2: { name: 'M&Ms', stock: 0 },
  3: { name: 'KitKat', stock: 0 },
});

snacksVendingMAchine.stockTotal(); // RETURNS: 1 item(s)
snacksVendingMachine.sale(1);
```
