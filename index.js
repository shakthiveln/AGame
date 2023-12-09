var firstWordSelected;
var secondWordSelected;


function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function onClickDo(event, asdf, z) {
    console.log("Clicked");
    console.log(event);
    console.log(asdf);
    console.log(z);
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
        td.setAttribute("onClick", "onClickDo(event, this);")
        td.innerText = shuffledList[count];
        count++;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
divid.appendChild(table);