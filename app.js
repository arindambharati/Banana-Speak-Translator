var btnSpeak = document.querySelector("#btn-speak");
var txtInput = document.querySelector("#txtarea-en");
var txtOutput = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text)
{
        return serverURL + "?" + "text=" + text;
}

function errorHandler(error)
{
        console.log("error occured!!",error);
        alert("Something is wrong with the server!! Please try later");
}
function clickHandler() {
        var inputText=txtInput.value;

        fetch(getTranslationURL(inputText))
        .then(response=>response.json())
        .then(json => {
                var translation=json.contents.translated;
                txtOutput.innerText=translation;
        })

        .catch(errorHandler)
}

btnSpeak.addEventListener("click",clickHandler);

