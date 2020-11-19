//arquivo responsavel por inserir os componentes na tela
const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();//section c/ class

const createMemoryCard = createMemory();/*aqui voce executa a função e atribui seu retorno a variavel*/ 

const $memoryCardJS = createMemoryCard( {/*passando um objeto como argumento*/ 
    src: "img/icon-js.png",
    alt: "Icone da linguagem Javascript",
});

const $memoryCardC = createMemoryCard( {
    src: "img/icon-c.png",
    alt: "Icone da linguagem C"
});

const $memoryCardWoman = createMemoryCard( {
    src: "img/icon-woman.png",
    alt: "Icone da garota"
});

const $memoryCardPhone = createMemoryCard( {
    src: "img/icon-celular.png",
    alt: "Icone do celular"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);

$root.insertAdjacentElement("beforeend", $cardsWrapper); //add section ao root


