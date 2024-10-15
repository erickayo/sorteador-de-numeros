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
        console.log(step)
    }}
