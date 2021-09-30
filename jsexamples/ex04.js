var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var EmployeeClass = /** @class */ (function () {
    function EmployeeClass(Id, EName) {
        this.Id = Id;
        this.EName = EName;
    }
    EmployeeClass.prototype.GetDetails = function () {
        console.log(this.Id + " " + this.EName);
    };
    return EmployeeClass;
}());
var PermnantEmployeeClass = /** @class */ (function (_super) {
    __extends(PermnantEmployeeClass, _super);
    function PermnantEmployeeClass(Id, EName) {
        return _super.call(this, Id, EName) || this;
    }
    PermnantEmployeeClass.prototype.CalculateBonus = function (salary) {
        return salary * 0.1;
    };
    return PermnantEmployeeClass;
}(EmployeeClass));
var TemporaryEmployeeClass = /** @class */ (function (_super) {
    __extends(TemporaryEmployeeClass, _super);
    function TemporaryEmployeeClass(Id, EName) {
        return _super.call(this, Id, EName) || this;
    }
    TemporaryEmployeeClass.prototype.CalculateBonus = function (salary) {
        return salary * 0.05;
    };
    return TemporaryEmployeeClass;
}(EmployeeClass));
var e1 = new PermnantEmployeeClass(1001, "Meghana");
var e2 = new PermnantEmployeeClass(1002, "Swetha");
e1.CalculateBonus(25000);
e2.CalculateBonus(15000);
e1.GetDetails();
e2.GetDetails();
