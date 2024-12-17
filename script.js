const cardContainer = document.getElementById('card-container');


function shuffleCards() {
  const cards = Array.from(document.querySelectorAll('.card'));
  const shuffledCards = cards.sort(() => Math.random() - 0.5);
  
  cardContainer.innerHTML = '';
  shuffledCards.forEach(card => cardContainer.appendChild(card));
}


function sortCards() {
  const cards = Array.from(document.querySelectorAll('.card'));
  const sortedCards = cards.sort((a, b) => a.dataset.number - b.dataset.number);
  
  cardContainer.innerHTML = '';
  sortedCards.forEach(card => cardContainer.appendChild(card));
}
