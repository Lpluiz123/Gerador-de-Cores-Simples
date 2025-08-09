const boxColor = document.querySelector(".box-color");
const selectColor = document.querySelector("#select-color");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

const showDisplay = () => {
    selectColor.addEventListener("input", (e) => {
  e.preventDefault();
  const changeColor = e.target.value;
  boxColor.style.backgroundColor = changeColor;
  document.body.style.backgroundColor = changeColor;
  const text = e.target.value;
  h2.innerText = `HEX: ${text}`;

  const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
  };
console.log(e)
const valueRgb = Object.values(hex2rgb(changeColor))
h3.innerText = `RGB : (${valueRgb})`

if(h2.textContent === "HEX: #000000") {
    h2.style.color = "#FFF"
    h3.style.color = "#FFF"
} else {
    h2.style.color = "#000"
    h3.style.color = "#000"
}

});
}

showDisplay()




