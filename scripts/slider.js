(function() { 
    let sliders = document.querySelectorAll('.fade-slider__item'),
        active = "fade-slider__item--visible",
        i=0;
    setInterval(function() {
              sliders[i].classList.remove(active);
                i++;
                if (i + 1 > sliders.length){
                    i=0;
                }
                sliders[i].classList.add(active);           
    }, 6000);
}())