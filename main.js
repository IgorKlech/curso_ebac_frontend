document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();

        var campoA = parseFloat(document.getElementById('campoA').value);
        var campoB = parseFloat(document.getElementById('campoB').value);
        var menssagemDiv = document.getElementById('Menssagem');

        if (campoB > campoA) {
            menssagemDiv.textContent = "O formulario é valido!";
            menssagemDiv.className = "Menssagem Success";
        } else {
            menssagemDiv.textContent ="O número do Camp B deve ser maior que o numero do Campo A";
            menssagemDiv.className = 'menssagem error';
        }
});