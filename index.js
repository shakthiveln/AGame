var firstWordSelected = null;
var idOfFirstSelectedWord = null;
var secondWordSelected = null;
var idOfSecondSelectedWord = null;
var point = 0;

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function isThisCorrect() {
    if (correctWordsJSON_6[firstWordSelected] === secondWordSelected) {
        console.log("Correct word");
        return true;
    }
    return false;
}

function showOrHideACell(element, add, remove) {
    let cell = document.getElementById(element);
    cell.classList.remove(remove);
    cell.classList.add(add);
    cell.style.cursor = "pointer";
    cell.setAttribute("onclick" , "openDoor(id);onClickDo(id);");
}

function resetAll() {
    firstWordSelected = null;
    secondWordSelected = null;
    idOfFirstSelectedWord = null;
    idOfSecondSelectedWord = null;
    document.getElementById("fillFirstSelectedWordID").value = "";
    document.getElementById("fillSecondSelectedWordID").value = "";
}

function checkAndValidate() {
    if (firstWordSelected != null && secondWordSelected != null) {
        if (isThisCorrect()) {
            // TODO: Leave boxes open.
            console.log("correct");
            point++;
            document.getElementById("score").innerText = point;
            if(point == 18){
                document.getElementById('winPopUp').style.display = 'flex';
            }
        }
        else {
            // TODO: Close the boxes.
            console.log("wrong");
            setTimeout( function () { showOrHideACell(idOfFirstSelectedWord,"hide", "show")}, 400);
            setTimeout( function () { showOrHideACell(idOfSecondSelectedWord,"hide", "show")}, 400);
        }
        setTimeout(resetAll, 400);
    }
}

function closePopup() {
    document.getElementById('winPopUp').style.display = 'none';
}

function onClickDo(id) {
    console.log("Clicked " + id);
    id = parseInt(id);

    if (firstWordSelected == null) {
        firstWordSelected = shuffledList[id];
        console.log("First word Selected: " + firstWordSelected);
        document.getElementById("fillFirstSelectedWordID").value = firstWordSelected;
        idOfFirstSelectedWord = id;
    }
    else if (secondWordSelected == null) {
        secondWordSelected = shuffledList[id];
        console.log("Second word Selected: " + secondWordSelected);
        document.getElementById("fillSecondSelectedWordID").value = secondWordSelected;
        idOfSecondSelectedWord = id;
        checkAndValidate();
    }
    else {
        console.log(firstWordSelected + secondWordSelected);
        return null;
    }
}

/**
 * CSS for Cells
 * @param {} element 
 */
function openDoor(element) {
    console.log(element)
    let cell = document.getElementById(element);
    cell.classList.add("show");
    cell.classList.remove("hide");
    // cell.innerHTML = '<div class="content">Value: ' + getRandomValue() + '</div>';
    cell.style.cursor = "default";
    cell.onclick = null;
}

/*
* Constructed Table.
*/
var shuffledList = shuffleArray(arrayOfWordsMixed_6);
let divid = document.getElementById("gameTableDivId");
let table = document.createElement("table");
let count = 0;

for (var row = 0; row < 6; row++) {
    let tr = document.createElement("tr");
    for (var col = 0; col < 6; col++) {
        let td = document.createElement("td");
        td.setAttribute("id", count);
        td.setAttribute("onClick", "openDoor(id);onClickDo(id);");
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
document.getElementById("score").innerText = point;