var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person8 = /** @class */ (function () {
    function Person8(name) {
        if (name === void 0) { name = 'Willy Leung666'; }
        this.name = name;
    }
    Person8.prototype.age = function (age) {
        if (age === void 0) { age = 0; }
        console.log(this.name + " is " + age + " old.");
    };
    Person8.prototype.sex = function (sex) {
        if (sex === void 0) { sex = 'male'; }
        var sexString = (sex == 'male' ? 'boy' : 'girl');
        console.log(this.name + " is a " + sexString + ".");
    };
    return Person8;
}());
var Chinese8 = /** @class */ (function (_super) {
    __extends(Chinese8, _super);
    function Chinese8(name) {
        return _super.call(this, name) || this;
    }
    Chinese8.prototype.from = function (country) {
        console.log(this.name + " is come from " + country);
    };
    Chinese8.prototype.job = function (job) {
        console.log(this.name + " is a " + job + ".");
    };
    return Chinese8;
}(Person8));
var Teacher8 = /** @class */ (function (_super) {
    __extends(Teacher8, _super);
    function Teacher8(name) {
        return _super.call(this, name) || this;
    }
    Teacher8.prototype.job = function (job) {
        console.log(this.name + " is a " + job + ".");
    };
    return Teacher8;
}(Chinese8));
//let person = new Person('Willy Leung');
var teacher8 = new Teacher8('Vicky Chan');
// teacher.name = 'Vick Chan';
teacher8.job('teacher');
teacher8.age(35);
