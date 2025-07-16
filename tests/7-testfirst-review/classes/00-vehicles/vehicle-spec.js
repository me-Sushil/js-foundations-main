// USE CLASS SYNTAX

/* eslint-env jasmine */
/* eslint-disable no-undef, no-prototype-builtins */

describe('Vehicle Class', () => {
  let vehicle;

  beforeEach(function () {
    // Note: Pay attention to the argument passed to Vehicle...it is an array
    vehicle = new Vehicle([2, 'gas', 'Harly-Davidson']);
  });

  it("should set the vehicle's, wheelTotal, energySource, manufacturer and isOn properties", () => {
    expect(vehicle.wheelTotal).toBe(2);
    expect(vehicle.energySource).toBe('gas');
    expect(vehicle.manufacturer).toBe('Harly-Davidson');
    expect(vehicle.isOn).toBe(false);
  });

  it('should have a function (aka method) `getSpec` on its prototype', () => {
    expect(vehicle.hasOwnProperty('getSpec')).toBe(false);
    expect(Vehicle.prototype.hasOwnProperty('getSpec')).toBe(true);
  });

  it('`getSpec` accepts a key as an argument and returns the value associated with key from the vehicle instance', () => {
    expect(vehicle.getSpec('wheelTotal')).toBe(2);
    expect(vehicle.getSpec('energySource')).toBe('gas');
    expect(vehicle.getSpec('manufacturer')).toBe('Harly-Davidson');
    expect(vehicle.getSpec('isOn')).toBe(false);
    expect(vehicle.getSpec('getSpec')).toBe(undefined);
  });
});

describe('Tesla', () => {
  let teslaCar;

  beforeEach(() => {
    teslaCar = new Tesla([300, 'Model S', 50, 100, [[4, 'electric', 'Tesla']]]);
  });

  it('Tesla is an extension of the Vehicle Class', () => {
    expect(teslaCar instanceof Vehicle).toBe(true);
  });

  it('should have properties specific to a Tesla such as MPC (miles per charge) and Model', () => {
    expect(teslaCar.milesPerCharge).toBe(300);
    expect(teslaCar.model).toBe('Model S');
    expect(teslaCar.chargePercentage).toBe(50); // 50% charged
    expect(teslaCar.minutesToCharge).toBe(100); // 100 minutes for a full charge
  });

  it('should have all properties of a Vehicle instance', () => {
    expect(teslaCar.wheelTotal).toBe(4);
    expect(teslaCar.energySource).toBe('electric');
    expect(teslaCar.manufacturer).toBe('Tesla');
    expect(teslaCar.getSpec('wheelTotal')).toBe(4);
  });

  it('assigns the prototype chain to inherit from Vehicle', () => {
    expect(teslaCar.hasOwnProperty('getSpec')).toBe(false);
    expect(Tesla.prototype.hasOwnProperty('getSpec')).toBe(false);
    expect(typeof teslaCar.getSpec === 'function').toBe(true); // getSpec is in the prototype
    // chain but not on every Tesla instance
  });

  it('should have a `minutesToFullCharge` method that accepts the current charge percentage and returns the estimated time until the battery is 100%', () => {
    // Review the end of the second paragraph for more information about the minutesToFullCharge method
    expect(teslaCar.minutesToFullCharge(50)).toEqual(
      '50 minutes until the charge is full!'
    );
  });
});
