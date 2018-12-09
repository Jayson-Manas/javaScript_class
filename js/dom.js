// modify documents after they have finished loading add new content to a page, change the color of an element to reflect a changing state, or remove an element the user does not need anymore;

// interact with your users- whether ticking a box, commenting on a blog post , or submitting a tax form, your users need to be able to communicate with you, nd javaScript allows them to do so;

// send and receive data to and from external APIs-harness the power of the thousnads of useful


//example
let x = document.getElementById("text");
let y= document.getElementById("btn");
let z= document.getElementById("btn2");
let i= document.getElementById("refresh");

document.getElementById("demo").innerHTML = "Hello World!";
y.style.backgroundColor = "blue";
z.style.backgroundColor = "red";

// onclick are event listeners

z.onclick = function(){
    x.style.color = "red";
}
y.onclick = function(){
    x.style.color = "blue";
}
i.onclick = function(){
    window.location.reload();

}

function changeColor(newColor){
    let btn=document.getElementById('text');
    btn.style.color=newColor;
}


// problem:

// create an html file
// manipulating the dom

// create a paragraph with some text describing what the document object model is.

// below the paragraph there should be two buttons
// one blue & one red
// when you click the button the txt colour should change to the colour of the button.