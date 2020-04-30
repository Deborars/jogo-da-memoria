const $root = document.querySelector("#root"); //pegando a referencia do root
const $memoryCardFront = document.createElement("article");


const $iconBug = `
    <img 
        src='img/icon-bug.png' 
        alt='icone de um inseto' 
        class='icon'>
`;


$root.insertBefore($memoryCardFront, null);
$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$memoryCardFront.insertAdjacentHTML("afterbegin", $iconBug);

for (var i = 0; i < 10; i++){
    createMemoryCard();
}