	
//Add click event listener to menu
document.getElementById('menuIcon').addEventListener("click",addMenuClass);

    //Menu AddClass
    
    function addMenuClass() {
        var menuIcon = document.getElementById('menuIcon');
        var header = document.getElementById('mainHeader');
    

        menuIcon.classList.toggle('open');
        header.classList.toggle('is-mobile-open');
        /*aggiungo la classe .noscroll al tag HTML
        per evitare che la pagina scorra quando ho aperto il menu */
        document.documentElement.classList.toggle('noscroll');

    
    }