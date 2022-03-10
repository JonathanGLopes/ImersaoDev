const $listCoins = document.querySelector(".list-coins");

$listCoins.addEventListener('change', (event) =>{
    const $origin = event.target;

    console.log($origin.value);
});