//////////////objects and prototypes//////////////
//  in addtion to its special properties, every javascript object has an internal property called prototypes this is a link(as know reference) to another object. when trying to access a property that does not exist in an object javacript tries this property in the protoype 

// using an existing object

// var anObject = {
//     a:2 
// };
//create anotherObject using  anObject as a prototype
// var anotherObject = Object.create(anObject);

// console.log(anotherObject.a);//will be 2
// the javascrript statement Object.create() is used to create the object anotherObject based on the prototype object anObject.

// if the prototype of an object does not have a desired property, then research continues in its own prototype until we get to the end of prototype chain. if the property was not found in objects, access returns the value undefined.

// console.log(anotherObject.b);//undefined
// cake prototype
//capital letters are acceptable for the original object
// property values are not defined
// orignal object will be used to create prototypes
// var Pastry = {
//     type: "",
//     flavour:"",
//     layers:0,
//     price:"",
//     occasion:"",

//     describe: function(){
//         var description ="The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
//         return description;
//     }

// };
//////////////////////////////prototypes//////////////////////////
// var muffin = Object.create(Pastry);
// muffin.type = "muffin";
// muffin.flavour = "blueberry";
// muffin.layers = 1;
// muffin.price = "R20";
// muffin.occasion = "breakfast";

// var cake = Object.create(Pastry);
// cake.type = "cake"
// cake.flavour = "vanilla"
// cake.layers = "3"
// cake.price = "R310"
// cake.occasion = "birthday"
/////////////////////////////prototypes/////////////////////////////
// console.log(muffin.describe());
// console.log(cake.describe());

//we created an object named Pastry, which brings together the properties common to all the characters.The cake and muffin are created via Pastry as a prototype, which delegates its features to them.

// the process of creating a pastry is a little repetitive for each character, you must sccessively give a value to each of its properties. you can do better by creating an initialzation function.

var PastryVeg ={
    // initialize the pastry
    init: function(type, flavour, layers, price, occasion){
        this.type=type;
        this.flavour=flavour;
        this.layers=layers;
        this.price=price;
        this.occasion=occasion;
    },

    // describe the pastry
    describe: function(){
        var description ="The " + this.type + " is a " + this.occasion + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
        return description;
    }
}

var muffin = Object.create(PastryVeg);
muffin.init("muffin", "blueberry", 1, "R20", "breakfast");

// var cake = Object.create(Pastry);
// cake.init("cake", "vanilla", 3, "R310", "birthday");

console.log(muffin.describe());
// console.log(cake.describe());

// The method init() takes the initial property values of the pastry as parameters. The pastry creation code is therefore reduced to only 2 steps:

// The actual creation, with the Pastry object as a prototype,

// ========================problem===================
// using objects and prototypes, create 3 pizzas one vegitarian one, halaal one, one meaty.
// properties
// base = thin, thick
// type =3
// layers = amount
// toppings = single double tripple cheese, jalapeno, mushrooms, pineapple, olive, feta, peppers, 
// prices = 
// write a program of how you can make the pizza or
// how you can eat the pizza 


// var Pizza ={
//     // initialize the pastry
//     init: function(type, flavour, layers, price, toppings, base){
//         this.type=type;
//         this.flavour=flavour;
//         this.layers=layers;
//         this.price=price;
//         this.toppings=toppings;
//         this.base=base;
//     },
//     describe: function(){
//         var description ="The " + this.type + " is a " + this.base + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
//         return description;
//     }
// }

// var muffin = Object.create(Pizza);
// muffin.init("muffin", "blueberry", 1, "R20", "breakfast");

// console.log(muffin.describe());