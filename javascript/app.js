const submit = document.querySelector('#submit');




submit.addEventListener('click',saveTask);

function saveTask() {
var node = document.createElement('li');
node.setAttribute("onclick","struck(this)")

var name = document.getElementById('taskName').value;
var date = document.getElementById('taskDate').value;


node.appendChild(document.createTextNode(name +" " + date));
 
document.querySelector('ul').appendChild(node);
}



