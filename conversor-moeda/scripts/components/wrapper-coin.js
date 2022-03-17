/*
    O $ na frente do wrapperCoin é só uma boa prática, quando se cria variáveis
    que guardam um elemento da tela.
*/

const $converter = document.querySelector(".converter");
let coin1 = 0;
let coin2 = 0;
let listCoin1 = "";
let listCoin2 = "";

//pegando valor através de um objeto

const coins = {
    "coin-1": 0,
    "coin-2": 0,
    "list-coin1": 'real',
    "list-coin2": 'sek'
};

$converter.addEventListener("input", (event) => {
    const $origin = event.target; // pegando a origem (quem disparou o evento)
    const id = $origin.getAttribute("id"); // pega o id do elemento de origem

    coins[id] = $origin.value; // o valor digitado no elemento

    console.log("ID", id);
    console.log("Value", $origin.value);
    console.log(`coins[${id}]`, coins[id]);
    
    /* Apenas com a linha de cima nós pegamos o valor de ambos inputs, 
    não precisando mais desses ifs e reduzindo o tamanho do código */

   // pegando o valor dos inputs com IF

    // if ($origin.getAttribute("id") === "coin-1") {
    //     coin1 = $origin.value;
    // }

    // if ($origin.getAttribute("id") === "coin-2"){
    //     coin2 = $origin.value;
    // }

    //pegando valor do option

    // if ($origin.getAttribute("id") === "list-coin1"){
    //     listCoin1 = $origin.value; 
    // }

    // if ($origin.getAttribute("id") === "list-coin2") {
    //     listCoin2 = origin.value;
    // }
});