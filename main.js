document.addEventListener("DOMContentLoaded", function() {
    var seuToggler = document.getElementById("menuToggler");
    var iconeFechar = document.getElementById("iconeFechar");
    var seuMenu = document.getElementById("menuNavbar");

    seuToggler.addEventListener("click", function() {
        // Alterne a exibição entre o toggler e o ícone "X"
        seuToggler.style.display = "none";
        iconeFechar.style.display = "block";

        // Exiba o menu
        seuMenu.style.display = "block";
    });

    iconeFechar.addEventListener("click", function() {
        // Alterne a exibição entre o toggler e o ícone "X"
        iconeFechar.style.display = "none";
        seuToggler.style.display = "block";

        // Oculte o menu
        seuMenu.style.display = "none";
    });
});
