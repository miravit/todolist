
class ListItems {
    constructor(item){
    this.item = item;
}
}

window.onload = function () {
startTodo();
createList();
}
let finishedList = [];

function startTodo(){
    let toDoList = ["äta","duscha","gymma","plugga"];

    for (let i = 0; i < toDoList.length; i++) {
        let contentItems = toDoList[i];
        createList(contentItems)
        
    }
}


function createList(content){
    let newUl = document.getElementById("ul");
    let newLi = document.createElement("li");
    newLi.classList="list";
    let newObject = new ListItems(content);
    finishedList.push(newObject);

for (i=0;i<finishedList.length;i++){
    newLi.innerHTML=finishedList[i].item;   
} 

newUl.appendChild(newLi);
console.log(finishedList)
}

//newLi.classList.add("clickable");
    //newLi.addEventListener("click", ()=>{handleClick(toDoList[i])})
//}

//function handleClick(newLi) {
    //console.log("du klickade på "+ newLi)
//}


