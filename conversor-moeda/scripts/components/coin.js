// window = browser = BOM (Browser Object Model)
// document = html / DOM = (Document Object Model)


const $coin = document.querySelector(".coin");

$coin.addEventListener("input", (event) => {
    const $origin = event.target;
    
    console.log($origin.value);
});