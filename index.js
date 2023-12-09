function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function check() {

    // const validList =["brute force"];
    // console.log("Hello There!");
    // let first;
    // let second;
    // let result = first.concat(second);
    // let i = 0;
    // if (result == mylist) {
    //     let score = i + 1;
    // } else {

    // }
}

const mylist = ["brute", "force", "Firewall", 'Credential', 'DDoS', 'Malware', 'Trojan', 'Social', 'Advanced', "brute", "force", "Firewall", 'Data', 'DNS', 'Spear', 'Crypto', 'SQL', 'Supply', "brute", "force", "Firewall", 'Ransomware', 'Insider', 'Spoofing', 'Phishing', 'b', 'c', "brute", "force", "Firewall", 'jacking', 'Exploit', 'Injection', 'Chain', 'Authentication', 'Protocol', "Cache", "force", "Computing", 'Analysis', 'Learning', 'Stack', 'a', 'b', 'c', "brute", "force", "Firewall", 'a', 'b', 'c', 'a', 'b', 'c', "brute", "force", "Firewall", 'a', 'b', 'c', 'a', 'b', 'c', "brute", "force", "Firewall", 'a', 'b', 'c', 'a', 'b', 'c', "brute", "force", "Firewall", 'a', 'b', 'c', 'a', 'b', 'c', "brute", "force", "Firewall", 'a', 'b', 'c', 'a', 'b', 'c'];
const newArray = [mylist];
var shuffledList = shuffleArray(mylist);
console.log(shuffledList);


let divid = document.getElementById("gameTableDivId");
let table = document.createElement("table");
let count = 0;
for (var i = 0; i < 9; i++) {
    let tr = document.createElement("tr");
    for (var j = 0; j < 9; j++) {
        let td = document.createElement("td");
        td.setAttribute("id", i + "_" + j);
        
        
        // let button =document.createElement("button");
        // button.setAttribute("button",check());           // onclick="check()"> </button> 
        // inputBtn.addEventListener("click", getInputVal);
        td.innerText = shuffledList[count];
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
divid.appendChild(table);

var div = document.getElementById("id"); 
div.onclick = function() {check}; 

        //  div.addEventListener("click",check);