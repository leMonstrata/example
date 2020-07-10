(function() {const openingButton = document.querySelector(".sidebar__hamburger");
const closingButton = document.querySelector(".sidebar__close");
const sidebar = document.querySelector('.sidebar');

openingButton.addEventListener("click", function() {
    sidebar.classList.add('sidebar--opened');
})

closingButton.addEventListener("click", function(){
    sidebar.classList.remove('sidebar--opened');
})
}());

