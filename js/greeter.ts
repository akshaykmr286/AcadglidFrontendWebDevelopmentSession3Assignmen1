

//class greeter
let welcomemsg:string = "Welcome to my website";
class Greeter {
    private msg:string;
    constructor(msg:string) {
        this.msg =  msg;
    }
    greeter() {
       return this.msg; 
    }
}

let greeterObj = new Greeter(welcomemsg);
console.log(greeterObj.greeter());