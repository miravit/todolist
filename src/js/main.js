

window.onload = function() {
    createList();
    //console.log(toDoList);   
}

class Todo {
    constructor(things,date,done){
        this.things=things;
        this.date=date;
        this.done=done;
    }      
    }
 


let toDoList = 
[new Todo("äta",new Date(),false)
,new Todo("gymma",new Date(),false)
,new Todo("plugga",new Date(),false)
,new Todo("sova",new Date(),false)
,new Todo("städa",new Date(),false),]

let toDoListChecked = [];


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
    newInput.className="inputBox"

    newLi.innerHTML+=toDoList[i].things;
    let theList = toDoList[i]; //skapar en variabel till min lista som loopas
    newLi.appendChild(newInput); 
    newUl.appendChild(newLi);
    myDiv.appendChild(newUl);
    newLi.addEventListener("click", ()=>{ 
        myCheckbox(newInput, newLi, theList, )}); //när jag klickar skickas dessa 3 värden till min function myCheckBox()       
        

} 



console.log(toDoList) //skriver mina objekt. Här syns även att done:false

function myCheckbox(myInput, newLi, clickedItem,) {
    if (myInput.checked) { //om checkboxen är iklickad kör koden. Behöver inte skriva ===true eftersom iklickad checkbox alltid är true
        let index = toDoList.indexOf(clickedItem);
        newLi.innerHTML = ""; //gör att listan blir tom och försvinner
        toDoList.splice(index,1) //tar bort ur listan
        console.log("denna todo låg på på index " +index+ " och position "+(index+1))
        if (clickedItem.done===false){ 
            clickedItem.done=true; //om done:false vilket den alltid är för jag bestämt det,ska den ändras till true. Alltså när det är klar är den done:true
            
            //return clickedItem;
            let checkedDiv = document.createElement("div");
            checkedDiv.className = "checkedDiv"
            let checkedUl = document.createElement("ul");
            checkedUl.className="checkedUl";
            let checkedli = document.createElement("li");
            let checkedInput = document.createElement("input");
           let myNewCheckedInput = checkedInput.setAttribute("type", "checkbox");
            checkedUl.appendChild(checkedli);
           checkedli.appendChild(checkedInput);
            checkedDiv.appendChild(checkedUl);
            document.body.appendChild(checkedDiv);
           checkedli.innerHTML+=clickedItem.things;
           let myValue = clickedItem.things;
            checkedli.addEventListener("click", ()=>{ 
                goBack(myNewCheckedInput,checkedli, newLi, myValue, checkedInput,clickedItem)});
                
                 
                if (clickedItem.done===true) {
                    toDoListChecked.push(clickedItem.things)
                     //här pushar till min lista som hetere toDoListChecked så att mina gjorda saker ska samlas i en egen lista
                    
                    
        }
    }
    else {
       
 
}

function goBack (checked,newCheckedLi, newLi, theValue, checkedInput, clickedItem) { //här försöker jag göra tt klickevent så att ifall de gjorda chheckboxarna klickas i ska de åka tillbaka till ursprungslistan 
        toDoList.push(clickedItem.things)
        toDoListChecked.pop() //funkar om man tar bort en i taget.
        newCheckedLi.innerHTML=" "; 
        newLi.innerHTML=theValue;
        newLi.appendChild(checkedInput);
       console.log(toDoListChecked)

}
console.log(toDoListChecked) //Nya listan uppdaterad med sakerna som är gjorda
}
}
}

