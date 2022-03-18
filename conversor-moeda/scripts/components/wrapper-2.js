const $wrapper2 = document.querySelector("#wrapper-2");
const $otherCoin2 = document.querySelector("#wrapper-1 > .coin");
const real = 2;
const wrapper2 = {
    coin: 0.5,
    "list-coins": "sek",
};

$wrapper2.addEventListener("input", (event) => {
    const $origin = event.target; //pegando a origem (quem disparou o evento)
    const value = $origin.value; //pegando valor inserido
    const ref = $origin.getAttribute("data-ref");

    wrapper2[ref] = value;

    $otherCoin2.value = value * real;
});