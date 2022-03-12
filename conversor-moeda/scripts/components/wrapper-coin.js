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

let coins = {
    "coin-1": 0,
    "coin-2": 0,
};

$converter.addEventListener("input", (event) => {
    const $origin = event.target;
    const id = $origin.getAttribute("id");

    coins[id] = $origin.value;

    console.log("coin-1", coins["coin-1"]);
    console.log("coin-2", coins["coin-2"])
    console.log("==============");

    //pegando o valor dos inputs com IF

    // if ($origin.getAttribute("id") === "coin-1") {
    //     coin1 = $origin.value;
    // }

    // if ($origin.getAttribute("id") === "coin-2"){
    //     coin2 = $origin.value;
    // }

    //pegando valor do option

    if ($origin.getAttribute("id") === "list-coin1"){
        listCoin1 = $origin.value; 
    }

    if ($origin.getAttribute("id") === "list-coin2") {
        listCoin2 = origin.value;
    }
});