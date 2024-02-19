const inputValue = document.querySelector("#ent");
const btn = document.querySelector("#btn")

const img = document.querySelector(".img img")
const img_div = document.querySelector(".img")
const container = document.querySelector(".container")

function qrCodeGenerator() {

let value = inputValue.value
if(!value) return;

btn.value = "Gerando....."
img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}`;

container.classList.add("active");

img.addEventListener("load", () => {
    img_div.classList.add("active");
    btn.value = "Código criado!";

}
)}



btn.addEventListener("click", () => {
    qrCodeGenerator();
  });
  
  inputValue.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      qrCodeGenerator();
    }
  });
  

  inputValue.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        qrCodeGenerator();
    }
  });
  
  
  inputValue.addEventListener("keyup", () => {
    if (!inputValue.value) {
      container.classList.remove("active");
      img_div.classList.remove("active")
      btn.value = "Gerar QR Code";
    }
  });