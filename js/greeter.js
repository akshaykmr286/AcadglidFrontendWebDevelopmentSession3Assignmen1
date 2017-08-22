//class greeter
var welcomemsg = "Welcome to my website";
var Greeter = (function () {
    function Greeter(msg) {
        this.msg = msg;
    }
    Greeter.prototype.greeter = function () {
        return this.msg;
    };
    return Greeter;
}());
var greeterObj = new Greeter(welcomemsg);
console.log(greeterObj.greeter());
