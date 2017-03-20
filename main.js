var card1 = 'queen';
var card2 = 'queen';
var card3 = 'king';
var card4 = 'king';

var game = document.getElementById('game-board')
var newItem = document.createElement('div class='card'');
function createCards () {
  var card = 'card'
for (var i = 0; i<4; i++) {
  newItem.textContent = 'card'
}
document.getElementById('game-board')[0].appendChild(newItem)}
// if (card1===card2) {alert('match');}
// else if (card3 === card4) {alert('match');}
// else {alert('no match')}

var cards = ['queen', 'queen', 'king', 'king']
var cardsInPlay = []
function createBoard () {
  for (var i = 0; i<4; i++) {
cardElement.setAttribute('data-card', cards[i])
} cardElement.addEventListener('click', isTwoCards)
}

function isTwoCards () {
  cardsInPlay.push(this.getAttribute('data-card'));
  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];

  }

}
