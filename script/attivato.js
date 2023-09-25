/*
Funzione per aggiungere la classe "active" e "attivato" all'elemento del menu corrispondente alla pagina corrente
function setActiveMenu() {
    const menuItems = document.querySelectorAll('.icon-link');
    //const menuItems = getElementById("#href");
    const url_limit = window.location.href.split('?')[0].split('/').pop().split('.')[0];

    $(menuItems).removeClass('attivato');
    $(menuItems).addClass('link-body-emphasis');

    $(menuItems).each(function(){
        if($(this).hasClass(url_limit)){
            $(this).addClass('attivato')
            $(this).removeClass('link-body-emphasis');
        }
    });
}

setActiveMenu();
*/


/* Ottieni tutti gli elementi del menu
const menuItems = document.querySelectorAll('#lista_icone li');
const image = document.querySelector('.image');

// Aggiungi un gestore di eventi click a ciascun elemento del menu
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Rimuovi la classe 'active' da tutti gli elementi del menu
    menuItems.forEach(item => {
      item.classList.remove('active');
    });

    // Aggiungi la classe 'active' solo all'elemento cliccato
    item.classList.add('active');
    const itemName = item.getAttribute('data-menu-item');
    image.src = `${itemName}-color.svg`;
  });
});
*/


$(document).ready(function() {

    const imageMap = {
        'spaghetti': 'spaghetti-color.svg',
        'pizza': 'pizza-color.svg',
        'burger': 'burger-color.svg',
        'french-fries': 'french-fries-color.svg',
        'drink': 'drink-color.svg',
        'cake': 'cake-color.svg',
    };

    // Ottieni tutti gli elementi del menu
    const menuItems = $('#lista_icone li');

    // Aggiungi un gestore di eventi click a ciascun elemento del menu
    menuItems.on('click', function() {
        // Rimuovi la classe 'active' da tutti gli elementi del menu
        menuItems.removeClass('active');

        // Aggiungi la classe 'active' solo all'elemento cliccato
        $(this).addClass('active');

        // Ottieni il nome dell'immagine dalla voce del menu cliccata
        const itemName = $(this).attr('name')

        itemName.attr('src', 'assets/icons/' + itemName + "-color.svg");
    });
});