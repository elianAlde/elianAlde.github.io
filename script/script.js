const menuUl = document.querySelectorAll('.icon-link');
const infoElements = document.querySelectorAll('.card');

menuUl.forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.getAttribute('data-target');
        
        // Nascondi tutte le informazioni
        infoElements.forEach(info => {
            info.style.display = 'none';
        });

        // Mostra solo l'informazione corrispondente
        const targetElement = document.getElementById(targetId);
        targetElement.style.display = 'block';
    });
});