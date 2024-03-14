// your JavaScript file
const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.setAttribute("style", "color: red");
para.textContent = "Hey I'm red!";

container.appendChild(para);

const h3 = document.createElement("h3");
h3.setAttribute("style", "color: blue");
h3.textContent = "I’m a blue h3!";

container.appendChild(h3);

const childContainer = document.createElement("div");
childContainer.setAttribute("style","border-style: solid; border-color: black; background-color: pink");

const h1 = document.createElement("h1");
const anotherP = document.createElement("p");
h1.textContent = "I’m in a div";
anotherP.textContent = "ME TOO!";

childContainer.appendChild(h1);
childContainer.appendChild(anotherP);

container.appendChild(childContainer);

const mtd2 = document.querySelector('#mtd2');
// mtd2.onclick = () => alert("Hello World!");

const mtd3 = document.querySelector('#mtd3');
mtd3.addEventListener('click', function(e) {
    console.log(e);
});
// mtd3.addEventListener('click', () => alert("Hello World!"));
mtd3.addEventListener('click', function(e) {
    e.target.setAttribute("style", "background-color : blue");
});

const buttons = document.querySelectorAll('button');

buttons.forEach( (button) => {
    button.addEventListener('click', () => alert(`Hello World! I am ${button.id}`));
});
