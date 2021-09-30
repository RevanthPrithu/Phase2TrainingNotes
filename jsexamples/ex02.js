var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.SetDetails = function (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    };
    Person.prototype.GetDetails = function () {
        console.log(this.name + " " + this.gender + " " + this.age);
    };
    return Person;
}());
var p1 = new Person();
p1.SetDetails("revanth", "male", 22);
p1.GetDetails();
