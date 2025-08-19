const exemploH2 = document.getElementById("exemplo-H2");
// console.log("element ====>", element);
exemploH2.style.color = 'blue';

const novaH1 = document.createElement('h1');
novaH1.textContent = "NOVO ELEMENTO H1 NA TELA";
console.log("novaH1 ====>", novaH1);
// document.body.appendChild(novaH1);

exemploH2.appendChild(novaH1);

// const headerColor = document.getElementById("header");
// headerColor.style.backgroundColor = 'lightgreen';

// const footerSize = document.getElementById("footer");
// footerSize.style.fontSize = '10px';

const buttonExemploJs = document.getElementById('buttonExemploJs');
buttonExemploJs.addEventListener('click', () => {
    alert("Batata botão clicado!");
});
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    console.log("Formulário enviado com sucesso!");
});

// const header = document.getElementById("header");
// header.addEventListener('mouseover', () => {
//     // alert("Não pode!");
// });

document.addEventListener("keydown", (event) => {
    console.log(`Tecla clicada: ${event.key}`)
    // console.log("Tecla clicada" + event.key});
    // console.log("Tecla clicada", event.key);

})