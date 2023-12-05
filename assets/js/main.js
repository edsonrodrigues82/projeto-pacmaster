var limitesDependentes = {
    "Bronze": 5,
    "Prata": 8,
    "Ouro": 10,
    "Esmeralda": 12,
    "Diamante": 15
};

function getCurrentDate() {
    var currentDate = new Date();
    var day = String(currentDate.getDate()).padStart(2, '0');
    var month = String(currentDate.getMonth() + 1).padStart(2, '0');
    var year = currentDate.getFullYear();
    return day + '/' + month + '/' + year;
}

document.addEventListener("DOMContentLoaded", function () {
    var currentDate = getCurrentDate();
    var dataCadastroInput = document.getElementById("data_cadastro");
    dataCadastroInput.value = currentDate;
    dataCadastroInput.disabled = true;

    var cpfInput = document.getElementById("cpf");
    var telefoneInput = document.getElementById("telefone");
    var cepInput = document.getElementById("cep");

    var cpfMask = IMask(cpfInput, {
        mask: '000.000.000-00'
    });

    var telefoneMask = IMask(telefoneInput, {
        mask: '(00) 00000-0000'
    });

    var cepMask = IMask(cepInput, {
        mask: '00000-000'
    });

    var planSelect = document.getElementById("plano");
    planSelect.addEventListener("change", updateValueField);
    updateValueField();
});

function updateValueField() {
    // Obtém o elemento de seleção
    var planoSelect = document.getElementById("plano");

    // Obtém o valor selecionado
    var selectedValue = planoSelect.value;

    // Define os valores associados a cada opção
    var valores = {
        "Bronze": 'R$ 99,00',
        "Prata": 'R$ 110,00',
        "Ouro": 'R$ 120,00',
        "Esmeralda": 'R$ 132,00',
        "Diamante": 'R$ 149,90'
    };

    // Atualiza o valor do campo "Valor do Plano"
    document.getElementById("valor_plano").value = valores[selectedValue];
}

const express = require('express');
const app = express();

app.get('/assets/html/Projeto/projeto-pacmaster/index.html', (req, res) => {
    res.redirect('/index.html');
});

// Restante da configuração do servidor...


function addDependent() {
    var planoSelect = document.getElementById("plano");
    var selectedValue = planoSelect.value;
    var numeroDependentes = document.querySelectorAll('.subtable-row').length;

    if (numeroDependentes >= limitesDependentes[selectedValue]) {
        alert("Limite de dependentes atingido para o plano selecionado.");
        return;
    }
    
    // Criar elemento div para representar um dependente
    var dependentDiv = document.createElement("div");
    dependentDiv.className = "subtable-row";

    // Adicionar campos para Parentesco
    var parentescoInput = createInput("text", "Parentesco");
    dependentDiv.appendChild(parentescoInput);

    // Adicionar campos para Nome
    var nomeInput = createInput("text", "Nome");
    dependentDiv.appendChild(nomeInput);

    // Adicionar campos para Data de Nascimento
    var dataNascimentoInput = createInput("text", "Data de Nascimento");
    dataMask = IMask(dataNascimentoInput, {
        mask: '00/00/0000'
    });
    dependentDiv.appendChild(dataNascimentoInput);

    // Adicionar campos para CPF
    var cpfInput = createInput("text", "CPF");
    cpfMask = IMask(cpfInput, {
        mask: '000.000.000-00'
    });
    dependentDiv.appendChild(cpfInput);

    // Adicionar botão de remoção
    var removeButton = document.createElement("button");
    removeButton.innerText = "Remover";
    removeButton.onclick = function () {
        removeDependent(dependentDiv);
    };
    dependentDiv.appendChild(removeButton);

    // Adicionar o dependente à div principal
    document.getElementById("subtable-body").appendChild(dependentDiv);
}

// Função para criar campos de entrada
function createInput(type, placeholder) {
    var input = document.createElement("input");
    input.type = type;
    input.placeholder = placeholder;
    input.className = "subtable-input"; // Adicionei uma classe aqui
    return input;
}

function removeDependent(dependentDiv) {
    // Remover o dependente da div principal
    document.getElementById("subtable-body").removeChild(dependentDiv);
}
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});