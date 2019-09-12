let Apple = function (weightApple) {
    this.weightApple = weightApple;
    this.getWeightApple = function () {
        return this.weightApple;
    };
    this.eatApple = function () {
        return this.weightApple--;
    };
};
let apple = new Apple(10);