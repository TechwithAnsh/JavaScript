const head=document.getElementById("heading")

console.log(head.innerText)     //it will only show the visible text
console.log(head.textContent)   //it will show all the text including hidden text
console.log(head.innerHTML)     //it wil show alll the text with its tag/element

// DOM Modification
// Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynamically created paragraph";
console.log(newParagraph.textContent);

// Append the new element to the container
const container = document.getElementById("container");
container.appendChild(newParagraph);

//const con = document.getElementaryById("container");
//const para = con.querySelector("p");

//remove element
document.querySelector("#container p").remove();


let date = new Date()
console.log(date);

setTimeout(()=> {
    console.log("welcome");
    // alert("offer valid till 12pm");
}, 5000)


setInterval(()=> {
    let date = new Date()
    console.log(date);
}, 1000)


// Event Handle
function handelClick() {
    document.getElementById("output").textContent = "Button clicked";
}
