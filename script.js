const form = document.querySelector("form");
const initial = document.getElementById("initial-number");
const quantity = document.getElementById("quantity");
const final = document.getElementById("final-number");
const resultContainer = document.getElementById("result-container");
const asideHeader = document.getElementById("aside-header"); // Referência ao cabeçalho

// Declarando e inicializando o array para armazenar os valores
let numbersArray = [];

form.onsubmit = (event) => {
    event.preventDefault();

    // Cria um objeto com os valores do formulário
    const newSubmit = {
        id: new Date().getTime(),
        quantity: parseInt(quantity.value),
        initialNumber: parseInt(initial.value),
        finalNumber: parseInt(final.value),
        created_at: new Date(),
    };
    console.log(newSubmit);

    // Limpa o array para evitar valores duplicados ao submeter novamente
    numbersArray = [];

    // Loop para gerar os números e armazená-los no array
    for (let step = newSubmit.initialNumber; step <= newSubmit.finalNumber; step++) {
        numbersArray.push(step);
    }

    console.log("Números gerados:", numbersArray);

    // Verifica se há números suficientes para selecionar a quantidade desejada
    if (numbersArray.length >= newSubmit.quantity) {
        const selectedNumbers = getRandomNumbersFromArray(numbersArray, newSubmit.quantity);
        console.log("Números aleatórios selecionados:", selectedNumbers);
        displayResults(selectedNumbers); // Mostra os resultados ao usuário
    } else {
        console.log("Número insuficiente de elementos para selecionar a quantidade desejada.");
    }
};

// Função para pegar `n` números aleatórios de um array
function getRandomNumbersFromArray(arr, n) {
    let result = [];
    let tempArray = [...arr]; // Cria uma cópia do array para não modificar o original

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        result.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1); // Remove o número selecionado para evitar duplicados
    }

    return result;
}

// Função para exibir os resultados ao usuário em blocos
function displayResults(numbers) {
    // Limpa o contêiner de resultados anterior
    resultContainer.innerHTML = "";

    // Cria o título do resultado e o subtítulo
    const headerDiv = document.createElement("div");
    const headerTitle = document.createElement("h3");
    headerTitle.textContent = "Resultado do sorteio";
    headerDiv.appendChild(headerTitle);

    // Adiciona o subtítulo
    const headerSubTitle = document.createElement("p");
    headerSubTitle.textContent = "1º resultado";
    headerDiv.appendChild(headerSubTitle);

    resultContainer.appendChild(headerDiv);

    // Cria blocos para cada número sorteado
    numbers.forEach((number, index) => {
        const resultParagraph = document.createElement("p");
        resultParagraph.className = "result";
        resultParagraph.textContent = `${index + 1}º: ${number}`;
        resultContainer.appendChild(resultParagraph);
    });

    // Mostra o contêiner de resultados e oculta o formulário e o cabeçalho
    resultContainer.style.display = "block";
    form.style.display = "none";
    asideHeader.style.display = "none";
}
