var firstWordSelected = null;
var secondWordSelected = null;
var point = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isThisCorrect() {
    if (correctWordsJSON[firstWordSelected] === secondWordSelected) {
        console.log("Correct word");
        return true;
    }
    return false;
}

function onClickDo(element, id) {
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
        document.getElementById("fillSecondSelectedWordID").innerHTML = secondWordSelected;
    }
    else {
        console.log(firstWordSelected + secondWordSelected);
        return null;
    }

    // setTimeout(final,5000);

    if(firstWordSelected != null && secondWordSelected != null){
        if (isThisCorrect()){
            point++;
            // TODO: Increase Score.
            // Leave boxes open.
            window.alert("CORRECT");
            console.log("correct");
            document.getElementById("score").innerText = point;
        }
        else {
            // window.alert("WRONG!!!");
            console.log("wrong");
        }
        firstWordSelected = null;
        secondWordSelected = null;
        document.getElementById("fillFirstSelectedWordID").innerHTML = "";
        document.getElementById("fillSecondSelectedWordID").innerHTML = "";
    }
}

function openDoor(element) {
    console.log(element)
    var cell = document.getElementById(element);
    cell.classList.add("show");
    cell.classList.remove("hide");
    // cell.innerHTML = '<div class="content">Value: ' + getRandomValue() + '</div>';
    cell.style.cursor = "default";
    // cell.onclick = null;
}

/*
* Constructed Table.
*/
var shuffledList = shuffleArray(arrayOfWordsMixed);
let divid = document.getElementById("gameTableDivId");
let table = document.createElement("table");
let count = 0;

for (var row = 0; row < 9; row++) {
    let tr = document.createElement("tr");
    for (var col = 0; col < 9; col++) {
        let td = document.createElement("td");
        td.setAttribute("id", count);
        td.setAttribute("onClick", "onClickDo(this, id);openDoor(id)");
        td.setAttribute("class", "box hide");
        let span = document.createElement("p");
        span.innerText = shuffledList[count];
        td.appendChild(span);
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

divid.appendChild(table);