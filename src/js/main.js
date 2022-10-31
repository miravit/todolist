
let toDoList = ["äta","duscha","gymma","plugga"];

console.log(toDoList);

window.onload = function() {
    createList();
}



function createList(){
for (i=0;i<toDoList.length;i++){
    let newLi = document.createElement("li");
    let newUl = document.getElementById("ul");
    newLi.classList="list"
    newLi.innerHTML=toDoList[i];
    newUl.appendChild(newLi);
    newLi.classList.add("clickable");
    newLi.addEventListener("click", ()=>{handleClick(toDoList[i])})
} 
}

function handleClick() {
   console.log("du klickade på ", toDoList[i])
}


