var Pizza ={
    // initialize the pastry
    init: function(type, flavour, layers, price, base){
        this.type=type;
        this.flavour=flavour;
        this.layers=layers;
        this.price=price;
        this.base=base;
    },
    describe: function(){
        var description ="The " + this.type + " is a " + this.base + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
        return description;
    },
    toppings: function(){
        var description ="The " + this.type + " is a " + this.base + " pastry, has a " + this.flavour + " flavour, " + this.layers + " layer(s), and costs " + this.price + ".";
        return description;
    }

    }
// ================================vegaterian start===============================


var vegaterian = Object.create(Pizza);
vegaterian.init("vegaterian", "blueberry", 1, "R20", "breakfast", "thick");

// ================================vegaterian end===============================

// ================================halaal start===============================

var halaal = Object.create(Pizza);
halaal.init("halaal", "blueberry", 1, "R20", "breakfast", "thin");
// ================================vegaterian end===============================

// ================================meaty start===============================

var meaty = Object.create(Pizza);
meaty.init("meaty", "blueberry", 1, "R20", "breakfast", "thick");


// ================================meaty end===============================

// =================console.log pizza recipe===============================



console.log(vegaterian.describe());
console.log(halaal.describe());
console.log(meaty.describe());