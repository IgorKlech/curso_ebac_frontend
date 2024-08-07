document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

        var campoA = parseFloat(document.getElementById('campoA').value);
        var campoB = parseFloat(document.getElementById('campoB').value);
        var mensagemDiv = document.getElementById('mensagem');

        if (campoB > campoA) {
            mensagemDiv.textContent = "O formulario é valido!";
            mensagemDiv.className = "success";
        } else {
            mensagemDiv.textContent ="O número do Camp B deve ser maior que o numero do Campo A";
            mensagemDiv.className = 'error';
        }
});
