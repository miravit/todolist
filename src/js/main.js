

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
    newInput.setAttribute("type","checkbox"); //gör input till en checkbox

    newLi.innerHTML+=toDoList[i].things;
    let theList = toDoList[i]; //skapar en variabel till min lista som loopas
    newLi.appendChild(newInput); 
    newUl.appendChild(newLi);
    myDiv.appendChild(newUl);
    newLi.addEventListener("click", ()=>{ 
        myCheckbox(newInput, newLi, theList)}); //när jag klickar skickas dessa 3 värden till min function myCheckBox()
        
        

} 

}

console.log(toDoList) //skriver mina objekt. Här syns även att done:false

function myCheckbox(myInput, newLi, clickedItem) {
    
    
    if (myInput.checked) {
        let index = toDoList.indexOf(clickedItem);
        newLi.innerHTML = ""; //gör att listan blir tom och försvinner
        toDoList.splice(index,1)
        console.log("denna todo låg på på index " +index)
        if (clickedItem.done===false){
            clickedItem.done=true;
            //console.log(clickedItem.done) 
            console.log(clickedItem) //här är done:true
            return clickedItem;
            
        }
    }
    else {
        
    }
    
}


