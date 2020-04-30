function createMemoryCard(){  
    const $memoryCard = document.createElement("article"); //criando um elemento article

    const $iconCollab = `
        <img 
            src='img/icon-collabcode.png' 
            alt='Gueio mascote' 
            class='icon'>
    `;

    $root.insertBefore($memoryCard, null);
    $memoryCard.classList.add("memory-card");
    $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);
}  