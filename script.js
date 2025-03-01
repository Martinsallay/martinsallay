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
});