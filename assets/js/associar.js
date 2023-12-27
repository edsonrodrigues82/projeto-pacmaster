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
        alert('Enviado com sucesso');
        // Redirecionar para a tela inicial (substitua 'index.html' pelo seu caminho correto)
        window.location.href = 'index.html';
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