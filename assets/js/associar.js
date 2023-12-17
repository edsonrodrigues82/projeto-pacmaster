function showHideTextBox() {
    var selectedReligiao = document.getElementById("religiao").value;
    var outraReligiaoTextBox = document.getElementById("outraReligiao");

    // Se 'Outra' for selecionada, mostra a caixa de texto; caso contrário, oculta.
    if (selectedReligiao === "Outra") {
        outraReligiaoTextBox.style.display = "block";
    } else {
        outraReligiaoTextBox.style.display = "none";
    }
}
