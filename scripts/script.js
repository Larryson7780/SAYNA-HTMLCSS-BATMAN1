// Sélectionnez toutes les images dans les éléments li sous la classe .troisImages
const images = document.querySelectorAll('.troisImages li img');

// Parcourez toutes les images sélectionnées
images.forEach(image => {
    // Ajoutez un écouteur d'événements pour le survol de la souris
    image.addEventListener('mouseover', () => {
        // Appliquez l'effet de zoom en modifiant la transformation CSS
        image.style.transform = 'scale(1.5)';
    });

    // Ajoutez un écouteur d'événements pour lorsque la souris quitte l'image
    image.addEventListener('mouseleave', () => {
        // Réinitialisez la transformation CSS à sa valeur d'origine
        image.style.transform = 'scale(1)';
    });
});
