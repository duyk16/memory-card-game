const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let isLocked = false;
let firstCard, secondCard;

function flipCard() {
  if (isLocked) return;

  this.classList.toggle('flip')

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this
    return
  } 
  hasFlippedCard = false;
  secondCard = this;
  checkMatch();
}

function checkMatch() {
  if (firstCard.dataset.pokemon === secondCard.dataset.pokemon) {
    // Match card
    firstCard.removeEventListener('clicl', flipCard)
    secondCard.removeEventListener('clicl', flipCard)
    return
  }

  // unflip card
  isLocked = true;
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    isLocked = false;
  }, 900)
}

(function random() {
  cards.forEach(card => {
    let ramdomNum = Math.floor(Math.random() * 12);
    card.style.order = ramdomNum;
  })
})();

cards.forEach(card => card.addEventListener('click', flipCard))