let Carro = document.querySelector("#Carro");
let Carro_Counter = document.querySelector("#Carrito");
let Carro2 = document.querySelector("#Carro2");
let Carro_Compras = 0;

Carro.addEventListener("click", function () {
    Carro_Compras++;
    Carro_Counter.innerText = `${Carro_Compras}`;
});
Carro2.addEventListener("click", function () {
    Carro_Compras++;
    Carro_Counter.innerText = `${Carro_Compras}`;
});

const imagen = document.getElementById("Imagen");
const imagenNueva = "static/images/comida-mexicana2.jpg";
const imagenOg = "static/images/comida-mexicana.jpg";

imagen.addEventListener("mouseover", function () {
    this.src = imagenNueva;
});

imagen.addEventListener("mouseout", function () {
    this.src = imagenOg;
});


const input = document.getElementById("input");
const boton = document.querySelector("#boton");
boton.addEventListener("click", function () {
    let email = input.value;
    alert(`Bienvenido ${email}`)
});