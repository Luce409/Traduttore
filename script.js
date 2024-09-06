//variabili
const langButtons = document.querySelectorAll('.lang-button');
const textInput = document.querySelector('.text-input');
const translationText = document.querySelector('.translation-text');
const translationFlag = document.querySelector('.translation-flag');


async function translate(text, lang, flag) {
    const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=it|${lang}`;
    const response = await fetch(url);
    const jsonData = await response.json();
    const result = jsonData.responseData.translatedText;
    console.log(result);
    translationText.innerText = result;
}

langButtons.forEach(function(langButton) {
    console.log(langButton);

    langButton.addEventListener('click', function() {
        const text = textInput.value;
        const lang = langButton.dataset.iso;
        const flag = langButton.innerText;
        console.log(flag);
        translate(text, lang, flag);
    });
});


// **JS objects**
// const car {
// color:'red';
// firm:'fiat';
//dot.semantic console.log
//}

//const car = {
 //   brand:"fiat",
 //   color:"red"
//}

//console = oggetto
//.log = metodo dell'oggetto
//tag html = nodi
//documento html = dom

//console.log(car.color)

// WEB API: Application Programming Interface
//JSON: formato di risposta molto comune a javascript, subito consumabile
//tipologia di chiamata: GET
// responsedata, translatedtext
//parametri: q (hello world!), langpair(en|it) pipe:|
//metodo get


// fetch api

