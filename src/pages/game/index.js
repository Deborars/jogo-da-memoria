//arquivo responsavel por inserir os componentes na tela
const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();//section c/ class
const $memoryCard = createMemoryCard();//article c/ class
const $memoryCardFront = createMemoryCardFront();//article c/ classe

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);


$root.insertAdjacentElement("beforeend", $cardsWrapper); //add section ao root


