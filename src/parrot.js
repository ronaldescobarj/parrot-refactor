export const PARROT_TYPES = {
    EUROPEAN:       'EUROPEAN',
    AFRICAN:        'AFRICAN',
    NORWEGIAN_BLUE: 'NORWEGIAN_BLUE',
};

export class Parrot {
    constructor(type, numberOfCoconuts, voltage, isNailed) {
        this.loadFactor = 9;
        this.baseSpeed = 12;

        this.type = type;
        this.numberOfCoconuts = numberOfCoconuts;
        this.voltage = voltage;
        this.isNailed = isNailed;
    }

    getSpeed() {
        switch (this.type) {

            case PARROT_TYPES.EUROPEAN:
                return new European(this.numberOfCoconuts, this.voltage, this.isNailed).getSpeed();
            case PARROT_TYPES.AFRICAN:
                return new African(this.numberOfCoconuts, this.voltage, this.isNailed).getSpeed();
            case PARROT_TYPES.NORWEGIAN_BLUE:
                return new Norwegian_Blue(this.numberOfCoconuts, this.voltage, this.isNailed).getSpeed();
        }
        throw new Error("Should be unreachable");
    }

}

class African extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed) {
        super("AFRICAN",numberOfCoconuts, voltage, isNailed);
    }

    getSpeed() {
        return Math.max(0, this.baseSpeed - this.loadFactor * this.numberOfCoconuts);
    }
}

class Norwegian_Blue extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed) {
        super("NORWEGIAN",numberOfCoconuts, voltage, isNailed);
    }

    getSpeed() {
        return (this.isNailed) ? 0 : this.getBaseSpeedWithVoltage(this.voltage);
    }
    getBaseSpeedWithVoltage(voltage) {
        return Math.min(24, voltage * this.baseSpeed);
    }
}

class European extends Parrot{
    constructor(numberOfCoconuts, voltage, isNailed) {
        super("EUROPEAN",numberOfCoconuts, voltage, isNailed);
    }

    getSpeed() {
        return this.baseSpeed;
    }
}