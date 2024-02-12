console.log(getElementsByTagName("input"));
console.log(getElementsByClassName("input"));
console.log(document.getElementById("weight"));
console.log(document.querySelector("input"));
console.log(document.querySelector("#height"));
console.log(document.querySelectorAll(".input"));

const weight = document.getElementById("weight")
console.log(weight.innerHTML);
const h1 = document.querySelector("h1");

const button = document.getElementById("button");
console.log(button);
button.addEventListener("click", () => {
    console.log("hi");
});