

window.onload = function() {
    createList();
    //console.log(toDoList);   
}

class Todo {
    constructor(things,done){
        this.things=things;
        this.done=done;
    }
} 

let toDoList = [new Todo("äta",false),new Todo("gymma",false),new Todo("plugga",false),new Todo("sova",false),new Todo("städa",false),]

//myList = toDoList;

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

    newLi.innerHTML+=toDoList[i].things;
    let hej = toDoList[i];
    newLi.appendChild(newInput); 
    newUl.appendChild(newLi);
    myDiv.appendChild(newUl);
    newLi.addEventListener("click", ()=>{
        myCheckbox(newInput, newLi, hej)}); 
        
        

} 
console.log(toDoList)
}


function myCheckbox(myInput, newLi, myList) {
    console.log(myList)
    
    if (myInput.checked===true) {
        let index = toDoList.indexOf(myList);
        newLi.innerHTML = " ";
        toDoList.splice(index,1)
        console.log("denna todo låg på på index " +index)
        if (myList.done===false){
            myList.done=true;
            console.log(myList.done)
            return myList;
            
        }
    }
    else {

    }
    console.log(myList)
}

