let btnTranslate=document.getElementById('btn-trans');
let inputArea=document.getElementById('inputTxt');
let outputArea=document.getElementById('outputTxt');

let url = 'https://api.funtranslations.com/translate/shakespeare.json';

function createURL(text) {
  return url + '?text=' + text;
}

function clickHandler() {
  let inText = inputArea.value;
  let outText = '';
  fetch(createURL(inText))
    .then((response) => response.json())
    .then((json) => {
      outText = json.contents.translated;
      outputArea.value = outText;
    })
    .catch((err) => console.log(err));
}

btnTranslate.addEventListener('click', clickHandler);