//arquivo que cuida apenas dos componentes
//qdo usado a arrow function e só possui uma linha não é necessário o uso da palavra chave return e nem chaves
//a função omite eles, porem o resultado é como se usassemos;
/*card recebe o argumento em JSON e acessa suas propriedades com o card.*/
const createMemoryCard = (card) => `
        <article class="memory-card ${card.nameClass}">
                <img 
                        src="${card.src}"
                        alt="${card.alt}" 
                        class='icon' onclick="handleClick()">
                </article>`;


