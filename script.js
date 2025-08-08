document.getElementById('botao-palavrachave').addEventListener('click', function() {
    const texto = document.getElementById('entrada-de-texto').value;
    
    if (texto.trim() === "") {
        alert("Por favor, insira um texto.");
        return;
    }

    // Exemplo simples: separa o texto em palavras e conta as frequências.
    const palavras = texto.split(/\s+/).map(p => p.toLowerCase());
    const contador = {};

    palavras.forEach(palavra => {
        contador[palavra] = (contador[palavra] || 0) + 1;
    });

    const palavrasChave = Object.entries(contador).sort((a, b) => b[1] - a[1]).slice(0, 10);
    const resultadoDiv = document.getElementById('resultado-palavrachave');
    resultadoDiv.innerHTML = '';

    palavrasChave.forEach(([palavra, contagem]) => {
        const p = document.createElement('p');
        p.textContent = `${palavra}: ${contagem}`;
        resultadoDiv.appendChild(p);
    });
});
