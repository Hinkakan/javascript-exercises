const addItem = document.querySelector('#addItem');
const input = document.querySelector('#item');
const list = document.querySelector('ul');

addItem.addEventListener('click', addItemFunction);

function addItemFunction() {
    console.log("function started");
    let i = input.value;
    input.value = "";

    let li = document.createElement('li');
    let span = document.createElement('span');
    let delButton = document.createElement('button');
    
    span.textContent = i;
    delButton.textContent = "Delete";
    li.appendChild(span);
    li.appendChild(delButton);
    list.appendChild(li);
    delButton.addEventListener('click', function(e) {
        delItemFunction(e);
    });
    focus(input);
};

function delItemFunction(e) {
    console.log(e);
    let parent = e.target.parentNode;
    list.removeChild(parent);
};