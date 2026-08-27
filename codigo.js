const frases = [
    "Mereces estar con personas que te apreciecen y vean tu verdadero valor",
    "Ninguna palabra puede cambiar el ser maravilloso, fuerte y único que eres",
    "Tu valor no disminuye por la incapacidad de otros para ver tu luz",
    "Ponte a tí como prioridad y enomórate del ser maravilloso y con un potencia infinito que eres",
    "Pedir ayuda no es signo de debilidad, es el primer acto de valentía para protegerte",
    "Romper el silencio es quitarle todo el podera quien intenta hacerte daño",
    "El mundo es enorme y esta lleno de personas que van a quererte y valorarte exactamente por quien eres",
    "Estos momentos difíciles no son tu destino final, solo un obstáculo en tu camino a cosas increiblemente grandes",
    "Tu historia no se define por el dolor que sientes hoy, si no por la fuerza con la que te levantarás mañana",
    "Reconocer la verdad de lo que sucede es el primer paso para sanar",
    "Esta etapa es solo un breve capítulo en el gran libro de tu vida; lo mejor esta por venir",
    "Extender la mano para buscar apoyo es el paso más fuerte y sabio que puedes dar",
    "Quienes intentan apagar tu brillo solo muestran lo mucho que les encandelilla tu luz"
];
const botonFrase = document.getElementById("boton_frase");
const frase = document.getElementById("contenedor_frase");

botonFrase.addEventListener("click", function() {
    const numero = Math.floor(Math.random() * frases.length);
    frase.innerHTML = `<p class="frasesresultado">${frases[numero]}</p>`;
});
