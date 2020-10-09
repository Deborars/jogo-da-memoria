//arquivo que cuida apenas dos componentes
//qdo usado a arrow function e só possui uma linha não é necessário o uso da palavra chave return e nem chaves
//a função omite eles, porem o resultado é como se usassemos;
/*card recebe o argumento em JSON e acessa suas propriedades com o card.*/


const createMemory = () => {
    console.log("a função foi executada")
    const $head = document.querySelector("head");
    const $style = document.createElement("style");/*cria o elemento*/
    $style.textContent = `
        .memory-card{
        width: 155px;
        height: 155px;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        position: relative;
        cursor: pointer;
    }
    .memory-card.-front{
        background-color: #2a2a2a;
    }
    .memory-card.-front::before{
        content: "";
        width: 95px;
        height: 95px;
        background-color: #d4d4d4;
        border-radius: 50%;
        position: absolute;   
    }
    .memory-card > .icon{
        width: 100px;
        height: 100px;
    }
    
    .memory-card.-front > .icon{
        position: absolute;
        transform: translateY(-10px);
    }
`;
$head.insertBefore($style, null);/*insere o style dentro dele*/ 


return ({src, alt, nameClass})=>`
    <article class="memory-card ${nameClass}">
        <img 
            src="${src}"
            alt="${alt}" 
            class='icon' onclick="handleClick()">
    </article>`;
};







