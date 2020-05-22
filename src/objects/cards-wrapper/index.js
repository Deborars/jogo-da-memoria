//gera a section com o DOM para tornar-se um element
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
    }
    
    .cards-wrapper > .memory-card{
        margin-bottom: 10px;
    }`;/*cria o conteudo para a tag style*/
    
    $head.insertBefore($style, null);

    return $cardsWrapper;
}
