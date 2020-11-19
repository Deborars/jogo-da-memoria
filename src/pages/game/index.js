//arquivo responsavel por inserir os componentes na tela
const $root = document.querySelector("#root");

const $cardsWrapper = createCardsWrapper();//section c/ class

<<<<<<< HEAD
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
=======
const $memoryCardJS = createMemoryCard( {/*passando um json como argumento*/ 
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


>>>>>>> 568455c081ee28338020b1bed239cd2c6380ef24

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
<<<<<<< HEAD
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPhone);
=======
>>>>>>> 568455c081ee28338020b1bed239cd2c6380ef24

$root.insertAdjacentElement("beforeend", $cardsWrapper); //add section ao root


