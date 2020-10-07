//arquivo responsavel por inserir os componentes na tela
const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();//section c/ class

const $memoryCardJS = createMemoryCard( {/*passando um objeto como argumento*/ 
    nameClass: "-front",
    src: "img/icon-js.png",
    alt: "Icone da linguagem Javascript"
});

const $memoryCardC = createMemoryCard( {
    nameClass: "-front",
    src: "img/icon-c.png",
    alt: "Icone da linguagem C"
});

const $memoryCardWoman = createMemoryCard( {
    nameClass: "-front",
    src: "img/icon-woman.png",
    alt: "Icone da linguagem C"
});



$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);

$root.insertAdjacentElement("beforeend", $cardsWrapper); //add section ao root


