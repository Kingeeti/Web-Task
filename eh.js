let mainElement = document.getElementById("body");
console.log(mainElement.children);
console.log(mainElement.firstChild);
console.log(mainElement.lastChild);
let titleElement = document.getElementById("title");
if (titleElement) {
	titleElement.innerText = "New Title";
}
document.getElementsByTagName("body")[0].innerHTML = "<h1> i am changed </h1>";
let currentContainer = document.createElement('div');
currentContainer.innerText = "I am somewhere";
document.body.appendChild(currentContainer);
currentContainer.id = "img";
currentContainer.innerHTML = '<img src="C:/Users/kinge/Desktop/image.jpg" alt="Description of image">';
currentContainer.style.color = "blue";
currentContainer.style.backgroundColor = "grey";
let myImage = document.getElementById("img");
myImage.scr='C:/Users/kinge/Desktop/image.jpg';
let myElement = document.createElement('div');
let myButton=document.createElement('button');
myElement.appendChild(myButton);
document.body.appendChild(myElement);
myButton.innerText = "Click me";
// myElement.remove();
myButton.addEventListener('click', function() {
	alert("Button clicked");
});