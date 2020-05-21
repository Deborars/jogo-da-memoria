//arquivo responsavel por inserir os componentes na tela
const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();//section c/ class

const languageJS= {
    nameClass: "-front",
    src: "img/icon-js.png",
    alt: "Icone da linguagem javascript"
}

const $memoryCard = createMemoryCard(languageJS);
 
const $memoryCardFront = createMemoryCard(
    "-front",
    "img/icon-c.png",
    "Icone do livro em C"
)




$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);



$root.insertAdjacentElement("beforeend", $cardsWrapper); //add section ao root


