const form = document.querySelector("form")
const initial = document.getElementById("initial-number")
const quantity = document.getElementById("quantity")
const final = document.getElementById("final-number")

// Declarando e inicializando o array para armazenar os valores
let numbersArray = [];

form.onsubmit = (event) => {
    event.preventDefault();

    const newSubmit = {
        id: new Date().getTime(),
        quantity: quantity.value,
        initialNumber: initial.value,
        finalNumber: final.value,
        created_at: new Date(),
    };
    console.log(newSubmit);

    // Loop para gerar os números e armazená-los no array
    for (let step = initial.value; step <= final.value; step++) {
        numbersArray.push(step);
    }

    console.log("Números gerados:", numbersArray);

    // Verifica se há números suficientes para selecionar a quantidade desejada
    if (numbersArray.length >= newSubmit.quantity) {
        const selectedNumbers = getRandomNumbersFromArray(numbersArray, newSubmit.quantity);
        console.log("Números aleatórios selecionados:", selectedNumbers);
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