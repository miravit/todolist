

window.onload = function() {
    createList();
    //console.log(toDoList);
    
}


let toDoList = ["äta","duscha","gymma","plugga"];


function createList(){
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
   
    newLi.appendChild(newInput); 
    newUl.appendChild(newLi);
    myDiv.appendChild(newUl);
    newLi.addEventListener("click", ()=>{
        myCheckbox(newInput, newLi)}); 
       //console.log(newLi)
        
} 
 
}

function myCheckbox(myInput, newLi) {
    console.log(newLi)
    if (myInput.checked===true) {
        let index = toDoList.indexOf(newLi)
        newLi.innerHTML = " ";
        toDoList.splice(index,1)
        console.log(toDoList)
    }
    else {

    }
}
