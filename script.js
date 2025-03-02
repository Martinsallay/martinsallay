document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll("#navbar a");
    
    navbarLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Zabraňuje prekliku na nový odkaz
            const targetId = link.getAttribute("href"); // Získa ID sekcie
            const targetSection = document.querySelector(targetId); // Získa sekciu podľa ID

            // Skryje všetky sekcie
            document.querySelectorAll(".container > div").forEach(section => {
                section.classList.add("hidden");
            });

            // Zobrazí sekciu, na ktorú klikol užívateľ
            targetSection.classList.remove("hidden");
        });
    });

    const galleryContainer = document.getElementById('gallery-container');
    const imageFolder = 'images/pets/';
    const imageExtensions = ['jpg', 'jpeg', 'png', 'gif'];

    // Funkcia na načítanie obrázkov
    function loadImages() {
        let imageIndex = 1;
        let imageFound = true;

        while (imageFound) {
            imageFound = false;
            imageExtensions.forEach(extension => {
                const imgElement = new Image();
                imgElement.src = `${imageFolder}pet${imageIndex}.${extension}`;
                imgElement.alt = `PET ${imageIndex}`;

                imgElement.onload = function() {
                    imageFound = true;
                    const galleryItem = document.createElement('div');
                    galleryItem.classList.add('gallery-item');
                    galleryItem.appendChild(imgElement);
                    galleryContainer.appendChild(galleryItem);
                };

                imgElement.onerror = function() {
                    // Ak obrázok nie je nájdený, pokračujeme na ďalší
                    imgElement.remove();
                };
            });
            imageIndex++;
        }
    }

    loadImages();
});

document.querySelectorAll('.portfolio-item').forEach(item => {
    // Pri dotyku na položku
    item.addEventListener('touchstart', () => {
        item.classList.add('hover-effect'); // Pridá efekt hover pri dotyku
    });

    // Pri skončení dotyku na položke
    item.addEventListener('touchend', () => {
        item.classList.remove('hover-effect'); // Odstráni efekt, keď dotyk skončí
    });

    // Na desktopoch pre použitie hover efektu (ak chcete aj na desktop)
    item.addEventListener('mouseenter', () => {
        item.classList.add('hover-effect'); // Pridá efekt hover pri prechode myšou
    });

    item.addEventListener('mouseleave', () => {
        item.classList.remove('hover-effect'); // Odstráni efekt pri opustení myšou
    });
});