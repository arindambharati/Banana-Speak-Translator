var btnSpeak = document.querySelector("#btn-speak");
var txtInput = document.querySelector("#txtarea-en");

function clickHandler() {
        console.log("clicked");
        console.log("input", txtInput.value);
}

btnSpeak.addEventListener("click",clickHandler);

