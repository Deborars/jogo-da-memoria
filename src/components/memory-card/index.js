//arquivo que cuida apenas dos componentes
//qdo usado a arrow function e só possui uma linha não é necessário o uso da palavra chave return e nem chaves
//a função omite eles, porem o resultado é como se usassemos;
/*card recebe o argumento em JSON e acessa suas propriedades com o card.*/
const createMemoryCard = card => {
        const {src, alt, nameClass} = card;
        return`
        <article class="memory-card ${nameClass}">
                <img 
                        src="${src}"
                        alt="${alt}" 
                        class='icon' onclick="handleClick()">
                </article>`;
        };


