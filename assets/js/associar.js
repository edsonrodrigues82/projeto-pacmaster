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

document.addEventListener('DOMContentLoaded', function () {
    // Função para exibir o popup
    function showSuccessPopup() {
        // Mostrar o overlay
        document.getElementById('overlay').style.display = 'block';
        // Mostrar o popup
        document.getElementById('success-popup').style.display = 'block';
        // Redirecionar para a tela inicial após alguns segundos (ajuste conforme necessário)
        setTimeout(function () {
            window.location.href = 'index.html';
        }, 2000);
    }

    // Adiciona um ouvinte de evento para o formulário
    document.querySelector('form').addEventListener('submit', function (event) {
        // Impede o envio padrão do formulário
        event.preventDefault();

        // Chama a função para exibir o popup de sucesso
        showSuccessPopup();
        // Pode adicionar código adicional aqui para enviar o formulário via AJAX, se necessário
    });
});