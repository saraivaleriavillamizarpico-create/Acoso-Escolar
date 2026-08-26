const frases = [
    "Mereces estar con personas que te apreciecen y vean tu verdadero valor"
];
const botonFrase = document.getElementById("boton_frase");
const frase = document.getElementById("contenedor_frase");

botonFrase.addEventListener("click", function() {
    const numero = Math.floor(Math.random() * frases.length);
    frase.innerHTML = `<p class="frasesresultado">${frases[numero]}</p>`;
});