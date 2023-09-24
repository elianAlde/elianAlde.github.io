// Funzione per aggiungere la classe "active" e "attivato" all'elemento del menu corrispondente alla pagina corrente
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