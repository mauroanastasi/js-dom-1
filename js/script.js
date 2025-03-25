const accesa = document.querySelector(`.accesa`);
const spenta = document.querySelector(`.spenta`);
const OnOffButton = document.getElementById(`onOffButton`);

OnOffButton.addEventListener(`click`, function(){
    if(accesa.classList.contains(`nascosta`)){
        accesa.classList.remove(`nascosta`);
        accesa.classList.add(`visibile`);
        spenta.classList.remove(`visibile`);
        spenta.classList.add(`nascosta`);
    } else {
        accesa.classList.remove(`visibile`);
        accesa.classList.add(`nascosta`);
        spenta.classList.remove(`nascosta`);
        spenta.classList.add(`visibile`);
    }
})
    
    
    
    
    
    
    
    
    
    
    
    
    





