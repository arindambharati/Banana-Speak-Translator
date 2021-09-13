var btnSpeak = document.querySelector("#btn-speak");
var txtInput = document.querySelector("#txtarea-en");
var txtOutput = document.querySelector("#output");

function clickHandler() {
        txtOutput.innerText="xasdihoid baaannna uggaag saaa"+ txtInput.value;
}

btnSpeak.addEventListener("click",clickHandler);

