const key = "54a4ea1946ea4a6332721dcf9f00a3ee"

function dadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = " Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = " Umidade " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

async function buscarCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
    dadosNaTela(dados)
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value
    buscarCidade(cidade)
}