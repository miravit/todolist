

//window.onload = function() {
    //createList();
    //console.log(toDoList);
    
//}


let toDoList = ["äta","duscha","gymma","plugga"];


//function createList(){
let myDiv = document.getElementById("listdiv");
let newUl = document.getElementById("myUl");
myDiv.className="container";
newUl.className="todoUl";
myDiv.appendChild(newUl);

for (i=0;i<toDoList.length;i++){
    let newLi = document.createElement("li");
    newLi.className="todoList"
    let newInput = document.createElement("input")
    newInput.setAttribute("type","checkbox");

    newLi.innerHTML+=toDoList[i];
    newInput.addEventListener("click", myCheckbox);
    newLi.appendChild(newInput); 
    newUl.appendChild(newLi);
    myDiv.appendChild(newUl);
} 
function myCheckbox() {
    if (myCheckbox===true) {
        newLi.innerHTML="DONE";
    }
    else {
       
    }
}

//}


