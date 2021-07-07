/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */

class ParkingSystem {
    constructor(big, medium, small) {
        this.slots = {
            1: big,
            2: medium,
            3: small
        };
    }
    
    /**
    * @param {number} carType
    * @return {boolean}
    */
    addCar(carType) {
        if (this.slots[carType] === 0) {
            return false;
        }

        this.slots[carType]--;
        return true;
    }
}


/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
