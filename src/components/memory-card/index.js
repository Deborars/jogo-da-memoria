//arquivo que cuida apenas dos componentes
function createMemoryCard(){   

    const $memoryCard = `
        <article class="memory-card">
            <img 
                src='img/icon-collabcode.png' 
                alt='Gueio mascote' 
                class='icon' onclick="handleClick()">
        </article>
    `;

    return $memoryCard;
}  

function createMemoryCardFront(){
 
    const $memoryCard = `
        <article class="memory-card -front">
            <img 
                src='img/icon-bug.png' 
                alt='icone de um inseto' 
                class='icon' onclick="handleClick()">
        </article>
    `;

    return $memoryCard;
}

function handleClick(){
    console.log("foi");
}