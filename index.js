var firstWordSelected = null;
var secondWordSelected = null;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isThisCorrect(){
    if(correctWordsJSON[firstWordSelected] === secondWordSelected){
        console.log("Correct word");
        return true;
    }
    return false;
}

function onClickDo(event, element, id) {
    console.log("Clicked");
    console.log(id);
    console.log(element.getInnerHTML());
    id = parseInt(id);
    let value = element.getInnerHTML();

    if (firstWordSelected == null) {
        firstWordSelected = shuffledList[id];
        console.log("First word Selected: " + firstWordSelected);
        document.getElementById("fillFirstSelectedWordID").innerHTML = firstWordSelected;
    }
    else if (secondWordSelected == null) {
        secondWordSelected = shuffledList[id];
        console.log("Second word Selected: " + secondWordSelected);
        document.getElementById("fillSecondSelectedWordID").innerHTML = firstWordSelected;
    }
    else {
        console.log(firstWordSelected + secondWordSelected);
        return null;
    }

    if(firstWordSelected != null && secondWordSelected != null){
        if (isThisCorrect()){
            // TODO: Increase Score.
            // Leave boxes open.
            window.alert("CORRECT");
        }
        else {
            window.alert("WRONG!!!");
        }
        firstWordSelected = null;
        secondWordSelected = null;
        document.getElementById("fillFirstSelectedWordID").innerHTML = "";
        document.getElementById("fillSecondSelectedWordID").innerHTML = "";
    }
}


/*
* Constructed Table.
*/
var shuffledList = shuffleArray(arrayOfWordsMixed);
let divid = document.getElementById("gameTableDivId");
let table = document.createElement("table");
let count = 0;

for (var i = 0; i < 9; i++) {
    let tr = document.createElement("tr");
    for (var j = 0; j < 9; j++) {
        let td = document.createElement("td");
        td.setAttribute("id", count);
        td.setAttribute("onClick", "onClickDo(event, this, id);");
        td.setAttribute("class","box");
        td.innerText = shuffledList[count];
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

divid.appendChild(table);