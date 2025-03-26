const accesa = document.querySelector(`.accesa`);
const spenta = document.querySelector(`.spenta`);
const OnOffButton = document.getElementById(`onOffButton`);

OnOffButton.addEventListener(`click`, function(){
    if(accesa.classList.contains(`nascosta`)){
        accesa.classList.remove(`nascosta`);
        accesa.classList.add(`visibile`);
        spenta.classList.remove(`visibile`);
        spenta.classList.add(`nascosta`);
        OnOffButton.innerText = "spenta"

    } 
    else {
        accesa.classList.remove(`visibile`);
        accesa.classList.add(`nascosta`);
        spenta.classList.remove(`nascosta`);
        spenta.classList.add(`visibile`);
        OnOffButton.innerText = "accesa"
    }
})

// OnOffButton.addEventListener(`click`, function(){
//     if(OnOffButton.includes("accesa")){
//         OnOffButton.innerText = "spenta"
//     }
    
//     else{
//         OnOffButton.innerText = "accesa"
//     }
// })













// OnOffButton.addEventListener(`click`, function(){
//     if(accesa.classList.contains(`nascosta`)){
//         accesa.className += " visibile";
//         spenta.className += " nascosta";
//     } else {
//         accesa.className += "nascosta";
//         spenta.className += "visibile";
//     }
// })

    