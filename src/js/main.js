import { Todo } from "../models/Todolist";

window.onload = function () {
  createList();
  myButton();
  console.log(toDoList);
};

let toDoList = [
  new Todo("äta", new Date(), false),
  new Todo("gymma", new Date(), false),
  new Todo("plugga", new Date(), false),
  new Todo("sova", new Date(), false),
  new Todo("städa", new Date(), false),
];
let toDoListChecked = [];

function createList() {
  let myDiv = document.getElementById("listdiv");
  let newUl = document.getElementById("myUl");
  myDiv.className = "container";
  newUl.className = "todoUl";
  myDiv.appendChild(newUl);
  newUl.innerHTML = " ";

  for (i = 0; i < toDoList.length; i++) {
    let newLi = document.createElement("li");
    newLi.className = "todoList";
    let newInput = document.createElement("input");
    newInput.setAttribute("type", "checkbox"); //gör input till en checkbox
    newInput.className = "inputBox";
    newLi.innerHTML += toDoList[i].things;
    let theList = toDoList[i]; //skapar en variabel till min lista som loopas
    newLi.appendChild(newInput);
    newUl.appendChild(newLi);
    myDiv.appendChild(newUl);
    newLi.addEventListener("click", () => {
      myCheckbox(newInput, newLi, theList);
    }); //när jag klickar skickas dessa 3 värden till min function myCheckBox()
  }
  let buttonSort = document.getElementById("btnSort");
  buttonSort.addEventListener("click", () => {
    //klickevent för ming sortera-knapp. skickar med min lista.
    sortList(toDoList, myDiv);
  });

  //console.log(toDoList) //skriver mina objekt. Här syns även att done:false

  function myCheckbox(myInput, newLi, clickedItem) {
    if (myInput.checked) {
      //om checkboxen är iklickad kör koden. Behöver inte skriva ===true eftersom iklickad checkbox alltid är true
      let index = toDoList.indexOf(clickedItem);
      newLi.innerHTML = ""; //gör att listan blir tom och försvinner
      toDoList.splice(index, 1); //tar bort ur listan
      console.log(
        "denna todo låg på på index " + index + " och position " + (index + 1)
      );
      if (clickedItem.done === false) {
        clickedItem.done = true; //om done:false vilket den alltid är för jag bestämt det,ska den ändras till true. Alltså när det är klar är den done:true

        //return clickedItem;
        let checkedDiv = document.createElement("div");
        checkedDiv.className = "checkedDiv";
        let checkedUl = document.createElement("ul");
        checkedUl.className = "checkedUl";
        let checkedli = document.createElement("li");
        let checkedInput = document.createElement("input");
        checkedInput.setAttribute("type", "checkbox");
        checkedUl.appendChild(checkedli);
        checkedli.appendChild(checkedInput);
        checkedDiv.appendChild(checkedUl);
        document.body.appendChild(checkedDiv);
        checkedli.innerHTML += clickedItem.things;
        let myValue = clickedItem.things;
        checkedli.addEventListener("click", () => {
          goBack(checkedli, newLi, myValue, checkedInput, clickedItem);
        });

        console.log(clickedItem); //done:true när jag klikat
        if (clickedItem.done === true) {
          let changeToFalse = (clickedItem.done = false);
          toDoListChecked.push(changeToFalse.things);
          //här pushar till min lista som hetere toDoListChecked så att mina gjorda saker ska samlas i en egen lista
        }
      }
      function goBack(
        newCheckedLi,
        newLi,
        theValue,
        checkedInput,
        clickedItem
      ) {
        //här försöker jag göra tt klickevent så att ifall de gjorda chheckboxarna klickas i ska de åka tillbaka till ursprungslistan
        toDoList.push(clickedItem); //skickar klickade [i] till min urspringslista
        newCheckedLi.innerHTML = " "; //tömmer min li-tag
        newLi.innerHTML = theValue; // skriver ut clickeditems.things, dvs todolis.things
        newLi.appendChild(checkedInput); //kopplar ihop med checkbox med li
        check(); //anropar en funktion som visar min uppdaterade lista i konsollen för att hålla kolla på att objekten blir som de ska.
      }
      //Nya listan uppdaterad med sakerna som är gjorda
      console.log("vad som finns kvar i listan: ", toDoList);
    }
  }
}

function check() {
  // kollar om det funkar.
  console.log("uppdaterad lista", toDoList);
}

function myButton() {
  //min "lägg till"-knapp
  let inputButton = document.getElementById("btn");
  inputButton.addEventListener("click", addToList); //
}

function addToList() {
  //sparar value från input och gör om den till false. Vet dock inte hur jag ska få in den i min klass.
  let inputValue = document.getElementById("userForm").value;
  //console.log(inputValue)
  BackToList = new Todo(inputValue, new Date(), false);
  toDoList.push(BackToList);
  console.log(BackToList); //Här ser jag att det jag skrivit blir ett objekt som matchar min lista.nu måste jag bara skicka in denna i min lista.
  createList(); //nu loopas hela listan igen + nya värdet. vill bara få ut nya värdet. Bhövr jag göra en ny loop kanske?
}

function sortList(theList, myDiv) {
  let newList = []; //ny array för min sorterade lista
  let sortUl = document.createElement("ul");
  sortUl.className = "sortUl";
  for (let i = 0; i < theList.length; i++) {
    let result = theList[i].things; //gör om varje item till en variabel så jag kan busha den till min array.
    SendToEmptyList(result);
  }
  function SendToEmptyList(result) {
    newList.push(result); //newList.push(result); //lägger till mina items i min tomma lista Newlist.
  }
  newList.sort(); //en sorteringsfunktion
  let sortLi = document.createElement("li");
  sortLi.className = "sortLi";
  sortLi.innerHTML = newList; //skapar en ny li jag skriver ut listan på
  myDiv.appendChild(sortUl); //använder mig av samma div och ul som innan. Dessa har skickats till min funktionsparameter.
  sortUl.appendChild(sortLi);
  //return newList;
}
