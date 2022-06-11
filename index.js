const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")

const respostas = [
    "Com Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
    "Não parece uma boa idéia!",
    "Não parece má idéia!",
    "Claro que não!",
    "Óbvio que não!",
    "Óbvio que sim!",
    "Claro que sim!",
]

function fazerPergunta() {

    if(inputPergunta.value == ""){
        alert("Digite sua Pergunta!")
        return
    }

    buttonPerguntar.setAttribute ("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalResposta = respostas.length
    const numeroAleatorio = Math.floor(Math.random() * totalResposta)

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]


    elementoResposta.style.opacity = 1;
    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
    }, 3000 )    

}

