// what is an object
// definition:something that has form
// occupy space, consist of matter
// declaring an object:

// var pen = {
//     color:"black",
//     brand:"parker",
//     type: "fine"

// }
// note: comma not needed at the end of type, unless it follows with more properties
// similarity, an object inprogramming is an entity that has properties. Each property defines a characteristics of the object. A property can be information associated with the object

// javaScript and objects

// console.log(pen.color);
// console.log(pen.brand);
// console.log(pen.type);

// create a new object in javaScript by setting its properties within a pair of curly braces

// the above code defines a variable named pen whose value is an object: you therfore say pen is an object this has three properties: type, color and brand

// var car={
//     wheel:"firestone",
//     windows:"PG",
//     petrol:"BP"

// }

// console.log(car.wheel)
// console.log(car.windows)
// console.log(car.petrol)

// console.log("my favourite pen brand is "+pen.brand+", however i fancy the color "+pen.color+". Somehow i have always admired "+ pen.type+ " tips");

// var cake={
    
//     flavour:"chocolate",
//     price:"R300 madibas",
//     layers:"3",
//     sprinkles:"tumbles",
//     topings:"flake"

// }
// var client={
//     name: "Nate",
//     surname:"madiba",
//     address:"codespace head office",
//     time:"3pm"
// }
// var name= prompt("enter your name");
// var surname= prompt("enter your surname");

//  console.log("Dear Mr "+client.name+" "+client.surname+ " I have created a delicious "+ cake.flavour+" cake for you , It has "+cake.layers+ " layers covered with "+cake.sprinkles+" and a touch of "+cake.topings+" to complement the taste. This juicy cake will be delivered to " +client.address+" at "+client.time+" this afternoon. Which will cost you "+ cake.price+".")

// cake.flavour="vanilla"
// cake.layers= 3+3


// console.log("Dear Mr "+client.name+" "+client.surname+ " I have created a delicious "+ cake.flavour+" cake for you , It has "+cake.layers+ " layers covered with "+cake.sprinkles+" and a touch of "+cake.topings+" to complement the taste. This juicy cake will be delivered to " +client.address+" at "+client.time+" this afternoon. Which will cost you "+ cake.price+".")

///////////////methods on objects//////////////////




// function describe(cake){
//     var description = "The " + cake.flavour + " cake has " + cake.layers + " layers and the cost is " + cake.price +".";
//     return description;
// }

// console.log(describe(cake));
// adding a method: when the value is a function
let cake1 = {
flavour: "caramel",
layers: "5",
price:"R300",
occasion: "birthday",
// new property with in the object( function)
// describe the cake

describe: function(){
    var description = "The " + this.flavour + " cake has " + this.layers + " layers and the cost is " + this.price +" madibas.";
    return description;
}
};
// console.log(cake1.describe());
var client={
        name: "Nate",
        surname:"Madiba",
        address:"codespace head office",
        time:"3pm",
        describe: function () {
            var info = "Dear Mr " + this.name + " " + this.surname + " the juicy cake will be delivered at "+ this.address+ " at " + this.time + "."

            return info;
        }
    }

    // console.log(client.describe());
    console.log(client.describe(),cake1.describe());