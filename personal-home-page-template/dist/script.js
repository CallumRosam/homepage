function getWords(type) {
  // Return words of a given type, or all words if type is 'WORD'
  let words = [
    {type: 'ADJECTIVE', value: 'big'},
    {type: 'ADJECTIVE', value: 'purple'},
    {type: 'ADJECTIVE', value: 'new'},
    {type: 'ADJECTIVE', value: 'interesting'},
    {type: 'ADJECTIVE', value: 'curious'},
    {type: 'ADJECTIVE', value: 'happy'},
    {type: 'ADJECTIVE', value: 'busy'},
    {type: 'ADJECTIVE', value: 'tiny'},
    {type: 'NOUN', value: 'umbrella'},
    {type: 'NOUN', value: 'knee'},
    {type: 'NOUN', value: 'banana'},
    {type: 'NOUN', value: 'platypus'},
    {type: 'NOUN', value: 'cat'},
    {type: 'NOUN', value: 'mouse'},
    {type: 'NOUN', value: 'house'},
    {type: 'VERB', value: 'impressed'},
    {type: 'VERB', value: 'honoured'},
    {type: 'VERB', value: 'saw'},
    {type: 'VERB', value: 'ate'},
    {type: 'VERB', value: 'surprised'},
    {type: 'VERB', value: 'annoyed'},
    {type: 'VERB', value: 'touched'},
    {type: 'VERB', value: 'understood'},
    {type: 'VERB', value: 'taught'},
  ];
  return words.filter(word => type === 'WORD' || word.type === type).map(word => word.value);
}

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}



document.getElementById('noun1').addEventListener('click', (event) => {
  event.target.innerText = randomMember(getWords('WORD'));

});

document.getElementById('btn1').addEventListener('click', (event) => {
  let new_li = document.createElement('li');
  new_li.innerText = 'Day';

  event.target.appendChild(new_li);

});

document.getElementById('verb').addEventListener('click', (event) => {
  event.target.innerText = randomMember(getWords('WORD'));

});

document.getElementById('adjective').addEventListener('click', (event) => {
  event.target.innerText = randomMember(getWords('WORD'));

});

document.getElementById('noun2').addEventListener('click', (event) => {
  event.target.innerText = randomMember(getWords('WORD'));

});

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('post').addEventListener('click', (event) => {
  let element_unordered = document.getElementById('unordered');
  let new_ul = document.createElement('ul');
  new_ul.innerText = getNumberOrString(document.getElementById('comment-box').value);

  element_unordered.appendChild(new_ul);

});