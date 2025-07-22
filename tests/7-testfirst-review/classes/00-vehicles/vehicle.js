// /* eslint-disable no-unused-vars */
class Vehicle{
    constructor ([wheelTotal, energySource, manufacturer, isOn = false]){
   // constructor (array){
    this.wheelTotal = wheelTotal,
    this.energySource = energySource,
    this.manufacturer = manufacturer,
    this.isOn = isOn
    }
   getSpec(key) {
//   console.log('Looking for:', key, 'Found:', this[key]);
  return this[key];
 }
}

class Tesla extends Vehicle {
     constructor([milesPerCharge, model, chargePercentage, minutesToCharge, [vehicleData]]) {
    super(vehicleData); 
    this.milesPerCharge = milesPerCharge;
    this.model = model;
    this.chargePercentage = chargePercentage;
    this.minutesToCharge = minutesToCharge;
    }

   minutesToFullCharge(chargePer) {
  const minutesLeft = (100 - chargePer);
  return `${minutesLeft} minutes until the charge is full!`;
}

}

