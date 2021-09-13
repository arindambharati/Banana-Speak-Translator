var btnSpeak = document.querySelector("#btn-speak");
var txtInput = document.querySelector("#txtarea-en");

btnSpeak.addEventListener("click",function clickEventHandler(){
    console.log("clicked");
    console.log("input",txtInput.value);
})