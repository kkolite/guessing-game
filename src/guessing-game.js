class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
        this.medium = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.medium = this.max - Math.floor((this.max - this.min) / 2);
    }

    guess() {
        return this.medium;
    }

    lower() {
        this.setRange(this.min, this.medium);
    }

    greater() {
        this.setRange(this.medium, this.max);
    }
}

module.exports = GuessingGame;
