(function(){
    const elem = document.querySelector('.products__list');
    const iso = new Isotope( elem, {
    itemSelector: '.products__item',
    filter: '.pop'
});
    const controll = document.querySelectorAll('.filter__link'),
          active = "filter__item--active";
          controll.forEach(item => {
            item.addEventListener('click',function(x) {
                x.preventDefault();

                const filterName = item.getAttribute('data-filter');

                controll.forEach(link => {  
                    link.closest('.filter__item').classList.remove(active);
                    })
                item.closest('.filter__item').classList.add(active);
                
               iso.arrange({
                 filter: (`.${filterName}`)          
                })
             })
        })
();