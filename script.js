document.getElementById('gerar-receita').addEventListener('click', function() {
    const ingredientesInput = document.getElementById('ingredientes').value;
    const ingredientes = ingredientesInput.split(',').map(ing => ing.trim()).filter(ing => ing);
    
    if (ingredientes.length === 0) {
        alert('Por favor, insira pelo menos um ingrediente.');
        return;
    }

    const receita = `
        <h2>Receita: ${ingredientes.join(', ')}</h2>
        <p>Ingredientes:</p>
        <ul>
            ${ingredientes.map(ing => `<li>${ing}</li>`).join('')}
        </ul>
        <p>Método de Preparo: Combine todos os ingredientes em um recipiente adequado e cozinhe em fogo médio por aproximadamente 30 minutos. Sirva a seguir em temperatura adequada.</p>
    `;

    document.getElementById('receita').innerHTML = receita;
});
