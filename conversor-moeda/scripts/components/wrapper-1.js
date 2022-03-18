const $wrapper1 = document.querySelector("#wrapper-1");
const $otherCoin1 = document.querySelector("#wrapper-2 > .coin");
const sek = 0.5;
const wrapper1 = {
    coin: 1,
    "list-coins": "real",
};

$wrapper1.addEventListener("input", (event) => {
    const $origin = event.target; //pegando a origem (quem disparou o evento)
    const value = $origin.value; //pegando valor inserido
    const ref = $origin.getAttribute("data-ref");

    wrapper1[ref] = value;

    $otherCoin1.value = value * sek;
});