document.getElementById('gerar-receita').addEventListener('click', function() {
    const ingredientesInput = document.getElementById('ingredientes').value;
    const ingredientes = ingredientesInput.split(',').map(ing => ing.trim()).filter(ing => ing);
    
    if (ingredientes.length === 0) {
        alert('Por favor, insira pelo menos um ingrediente.');
        return;
    }

    const receitaFalsa = `
        <h2>Receita Falsa: ${ingredientes.join(', ')}</h2>
        <p>Ingredientes:</p>
        <ul>
            ${ingredientes.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        <p>Método: Misture todos os ingredientes e cozinhe em fogo médio por 30 minutos. Sirva quente!</p>
    `;

    document.getElementById('receita').innerHTML = receitaFalsa;
});
