var a=10;
console.log(a);
function demo(){
    let b=20;
    console.log(b);
}
demo();




let user={
    fullname:"Ansh Kumar",
    address:{
        city:"Delhi NCR",
        state:"Delhi"
    },
    mobileno:9667328428,
    favcolor:["Black","Blue","Red"],
    demo:function(){
        return "demo function";
    }
}
console.log(user.fullname,user.mobileno,user.favcolor[1],user.address.city,user.demo());

console.log("My name is "+user.fullname+". My fav color is "+user.favcolor[0]);

// string literal
console.log(`My name is ${user.fullname}. My fav color is ${user.favcolor[0]}`);

// Object methods

// Object.keys(variable name)

// console.log(Object.keys(user));

// console.log(Object.values(user));

// console.log(Object.entries(user));

const car = {
    make: "ford",
    model: "mustang",
};

// object.freeze(car); // we cant add a new key and value pair but we can change or update the existing value

Object.seal(car); // we cant add a new key and value pair but we can change or update the existing value

car.model="ford mustang gt";
car.color="black";
console.log(car);