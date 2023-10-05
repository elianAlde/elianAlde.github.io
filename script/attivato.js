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

        if($(this).attr("tipo") == "spaghetti"){
            console.log("spaghetti è");
            $(this).children('a').children('img').attr('src', 'assets/icons/' + "spaghetti" + "-color.svg");
            $("#pizza").style("display: none;");
            $("#primo").style("display: block;");
        }
        if($(this).attr("tipo") == "meat"){
            console.log("canne i cavaddu è");
            $(this).children('a').children('img').attr('src', 'assets/icons/' + "meat" + "-color.svg");
        }
        if($(this).attr("tipo") == "pizza"){
            console.log("pizza è");
            $(this).children('a').children('img').attr('src', 'assets/icons/' + "pizza" + "-color.svg");
            $("#pizza").style("display: block;");
            $("#primo").style("display: none;");
        }
        if($(this).attr("tipo") == "french-fries"){
            console.log("frenchifries è");
            $(this).children('a').children('img').attr('src', 'assets/icons/' + "french-fries" + "-color.svg");
        }
        if($(this).attr("tipo") == "drink"){
            console.log("u drink è");
            $(this).children('a').children('img').attr('src', 'assets/icons/' + "drink" + "-color.svg");
        }
        if($(this).attr("tipo") == "cake"){
            console.log("u cannolu è");
            $(this).children('a').children('img').attr('src', 'assets/icons/' + "cake" + "-color.svg");
        }
    });
});


//Effetto animazione caricamento contenuti a comparsa
document.addEventListener("DOMContentLoaded", function() {
    var contenutiDaMostrare = document.querySelectorAll(".comparsa");

    contenutiDaMostrare.forEach(function(contenuto) {
      // Mostra ciascun contenuto con l'effetto a comparsa
    contenuto.style.display = "block";
    setTimeout(function() {
        contenuto.style.opacity = "1";
        contenuto.style.transform = "translateY(0)";
    }, 500);
    });
});