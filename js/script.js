const accesa = document.querySelector(`.accesa`);
const spenta = document.querySelector(`.spenta`);
const OnOffButton = document.getElementById(`onOffButton`);

OnOffButton.addEventListener(`click`, function(){
    if(accesa.classList.contains(`display:none`)){
        accesa.classList.add(`display:inline`)
        spenta.classList.add(`displa:none`)
    }
    else{
        accesa.classList.add(`display:none`)
        spenta.classList.add(`displa:inline`)
    }
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    





