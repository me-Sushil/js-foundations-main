### Vehicle

There are many different types of vehicles. Create the class `'Vehicle'` **that accepts an array as an argument**.

The `'Vehicle'` class creates an instance with the following properties:

- 'wheelTotal'
- 'energySource'
- 'manufacturer'
- 'isOn'

There may be a few additional methods and properties you need to add, read the specs carefully!

<hr>

After the `'Vehicle'` class is created, create an additional class called `'Tesla'`. The `'Tesla'` class contains all the properties as an instance of `'Vehicle'` (`Tesla` is an "extension" of the `Vehicle` class), in addition to its own unique properties such as:

- 'milesPerCharge'
- 'model',
- 'chargePercentage'
- 'minutesToCharge'

Every instance of `'Tesla'` has a `'minutesToFullCharge'` method that calculates how long it takes the Tesla vehicle to reach 100 percent battery.

Note: the specs state the it takes 100 minutes to charge and the vehicle in the specs starts at 50%. **Use the equation `100 - chargePercentage` to calculate the amount of minutes until a full charge, don't complicate the equation for any other edge cases.**

### Topics

- Use Class Syntax
  - Review `extends` and `super` syntax

### Tips:

- Read the specs carefully!
