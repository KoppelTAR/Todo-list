const submit = document.querySelector('#submit');




submit.addEventListener('click',saveTask);

function saveTask() {
    if (document.getElementById('taskName').value === "" || document.getElementById('taskDate').value === "") {
        alert("Please fill out the required inputs!");
    }
    else {
        var node = document.createElement('li');
        node.setAttribute("onclick","struck(this)")
        node.setAttribute("class","fs-5")
    
    
        var name = document.getElementById('taskName').value;
        var date = document.getElementById('taskDate').value;
    
    
        node.appendChild(document.createTextNode(name +" " + date));
     
        document.querySelector('ul').appendChild(node);
    }
}

function struck(ele) {
    ele.style = "text-decoration:line-through;";
}



