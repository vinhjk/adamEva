let Human = function (name, gender, weight) {
    this.name = name;
    this.gender = gender;
    this.weight = weight;

    this.speaking = function () {
      alert("My name is " + this.name + " , my gender is " + this.gender + " and my weight is " + this.weight);
    };

    this.checkApple = function () {
        alert(apple.getWeightApple());
    };
    this.checkWeight = function () {
        alert(this.weight);
    };
    this.eatApple1 = function () {
        if (apple.weightApple > 0){
            apple.eatApple();
            this.weight ++;
        }else {
            alert("Apple is empty !")
        }
    }

};
let adam = new Human('Adam', 'Male', 75);
let eva = new Human('Eva', 'Female', 50);

function speaking(human) {
    human.speaking();
}
function eatApple1(human) {
    human.eatApple1();
}
function checkApple(human) {
    human.checkApple();
}
function checkWeight(human) {
    human.checkWeight();
}