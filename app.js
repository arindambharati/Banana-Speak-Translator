var btnSpeak = document.querySelector("#btn-speak");
var txtInput = document.querySelector("#txtarea-en");
var txtOutput = document.querySelector("#output");

var serverURL="https://lessonfourapi.ArindamBharati.repl.co/translate/yoda.json";
// https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json?text=I am Arindam"


function getTranslationURL(text)
{
        return serverURL + "?" + "text=" + text;
}

function clickHandler() {
        var inputText=txtInput.value;

        fetch(getTranslationURL(inputText))
        .then(response=>response.json())
        .then(json => {
                var translation=json.contents.translated;
                txtOutput.innerText=translation;
        })
}

btnSpeak.addEventListener("click",clickHandler);

