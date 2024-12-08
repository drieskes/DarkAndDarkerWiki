 // JavaScript functie om de gebruiker naar de juiste sectie op de pagina te sturen
 function goToSection() {
    // Haal de waarde van de geselecteerde optie op uit het dropdown menu
    var selectedSection = document.getElementById("sectionSelect").value;
    
    // Controleer of er een sectie is geselecteerd (de waarde kan een lege string zijn)
    if (selectedSection) {
        // Gebruik de waarde om de gebruiker naar de juiste sectie te sturen
        window.location.href = selectedSection;

        // Scroll de sectie naar het midden van het scherm
        scrollToElement(selectedSection);
    }
}

// JavaScript functie om de sectie naar het midden van het scherm te scrollen
function scrollToElement(id) {
    var element = document.querySelector(id);
    if (element) {
        // Scroll naar het element en centreer het in het scherm
        window.scrollTo({
            top: element.offsetTop - window.innerHeight / 5 + element.clientHeight / 2,
            behavior: "smooth"
        });
    }
}