
$(document).ready(function() {
    // Ottieni tutti gli elementi del menu
    const menuItems = $('#lista_icone li');
    const menuItemsLabel = $('#lista_icone li label');

    // Aggiungi un gestore di eventi click a ciascun elemento del menu
    menuItems.on('click', function() {
        // Rimuovi la classe 'active' da tutti gli elementi del menu
        menuItems.removeClass('active');
        menuItemsLabel.removeClass('active-label');

        // Aggiungi la classe 'active' solo all'elemento cliccato
        $(this).addClass('active');
        $(this).children('label').addClass('active-label');

        
        $("img").on('click', function() {
            const tipo = $(this).val();
            console.log(tipo);
            $(this).attr('src', 'assets/icons/' + $(this).attr("tipo") + "-color.svg");
        });
        
    });
});