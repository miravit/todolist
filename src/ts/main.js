import { Todo } from "./models/Todolist";

window.onload = function () {
  createList();
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
      }
      //Nya listan uppdaterad med sakerna som är gjorda
      console.log("vad som finns kvar i listan: ", toDoList);
    }
  }
}

//min "lägg till"-knapp
let inputButton = document.getElementById("btn");
inputButton.addEventListener("click", addToList); //

function addToList() {
  let inputValue = document.getElementById("userForm").value;
  //console.log(inputValue)
  BackToList = new Todo(inputValue, new Date(), false);
  toDoList.push(BackToList);
  console.log(BackToList); //Här ser jag att det jag skrivit blir ett objekt som matchar min lista.nu måste jag bara skicka in denna i min lista.
  createList(); //nu loopas hela listan igen + nya värdet. vill bara få ut nya värdet. Bhövr jag göra en ny loop kanske?
}

// test
//test
