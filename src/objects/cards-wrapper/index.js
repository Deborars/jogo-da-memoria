//gera a section com o DOM para tornar-se um element
function createCardsWrapper(){
    const $cardsWrapper = document.createElement("section")

    $cardsWrapper.classList.add("cards-wrapper");

    return $cardsWrapper;
}
