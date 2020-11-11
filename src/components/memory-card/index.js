//arquivo que cuida apenas dos componentes
//qdo usado a arrow function e só possui uma linha não é necessário o uso da palavra chave return e nem chaves
//a função omite eles, porem o resultado é como se usassemos;
/*card recebe o argumento em JSON e acessa suas propriedades com o card.*/

let score=0;
const createMemory = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");/*cria o elemento*/
    $style.textContent = `
        .memory-card{
            position relative;
            width: 155px;
            height: 155px;
        }

        .memory-card .card{
        width:100%;
        height:100%;
        background-color: #f25a70;
        border-radius: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        cursor: pointer;
        position absolute;
        margin-bottom:10px;
        }

        .memory-card .card.-front{
            background-color: #fff900;
            display:none;
        }

        .memory-card.-active .card,
        .memory-card.-score .card
        {
            display:none;
        }

        .memory-card.-active .-front,
        .memory-card.-score .-front
        {
            display:flex;
        }

        .memory-card .card.-front::before{
            content: "";
            width: 95px;
            height: 95px;
            background-color: #d4d4d4;
            border-radius: 50%;
            position: absolute;   
        }

        .memory-card .card > .icon{
            width: 100px;
            height: 100px;
        }

        .memory-card .card.-front > .icon{
            position: absolute;
            transform: translateY(-10px);
        }
    `;
$head.insertBefore($style, null);/*insere o style dentro dele*/ 



return ({src, alt})=>`
    <div class="memory-card" onclick="handleClick(this)">
            <article class="card -front">
                <img 
                    src="${src}"
                    alt="${alt}" 
                    class='icon'>
            </article>
            <article class="card">
                <img 
                    src="../img/icon-collabcode.png"
                    alt="icone do gueio" 
                    class='icon'>
            </article>
    </div>
    `;
}

function handleClick($component){//$component é o this
    if(!$component.classList.contains("-active")){//evita de ficar virando e desvirando a carta
        if(qtdMemoryCard < 2){//array 0, 1
            $component.classList.toggle("-active");
        }
        if(qtdMemoryCard==1){
            const $activeMemoryCards=document.querySelectorAll(".memory-card.-active");//ele peg um nodelist
            
            if(
            $activeMemoryCards[0].querySelector(".-front .icon").getAttribute("src")===
            $activeMemoryCards[1].querySelector(".-front .icon").getAttribute("src")){
                $activeMemoryCards.forEach(($memoryCard)=>{
                    $memoryCard.classList.add("-score");
                    $memoryCard.classList.remove("-active");
                })
                score++;
                console.log("Score value", score);
            }else{
                setTimeout(( )=>{
                    $activeMemoryCards.forEach(function(item){
                        item.classList.remove("-active");
                    })
                    qtdMemoryCard=0;
                },1500);
            }
            }
        }
        
        
        }
