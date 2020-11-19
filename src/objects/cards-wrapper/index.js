//gera a section com o DOM para tornar-se um element
<<<<<<< HEAD
//é gerado um objeto element para este arquivo
let qtdMemoryCard=0;//variavel global, 
=======
>>>>>>> 568455c081ee28338020b1bed239cd2c6380ef24
function createCardsWrapper(){
    const $cardsWrapper = document.createElement("section")
    $cardsWrapper.classList.add("cards-wrapper");

    const $head = document.querySelector("head");
    const $style = document.createElement("style");//cria a tag style
    $style.textContent = `.cards-wrapper{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        padding-top: 10px;
<<<<<<< HEAD
        width:100vw;
=======
>>>>>>> 568455c081ee28338020b1bed239cd2c6380ef24
    }
    
    .cards-wrapper > .memory-card{
        margin-bottom: 10px;
    }`;/*cria o conteudo para a tag style*/
    
    $head.insertBefore($style, null);

<<<<<<< HEAD
    $cardsWrapper.addEventListener("click", () =>{
        qtdMemoryCard=$cardsWrapper.querySelectorAll(".memory-card.-active").length;})

=======
>>>>>>> 568455c081ee28338020b1bed239cd2c6380ef24
    return $cardsWrapper;
}
