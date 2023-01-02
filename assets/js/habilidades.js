const acaoHabilidade = document.querySelector(".acao-habilidade")
const habilidades = document.querySelectorAll(".item-habilidade")
const respostas = [
'<h1>HTML</h1> <br> <p>É uma linguagem de marcação utilizada na construção de páginas na Web.</p> <br>',
'<h1>CSS</h1> <br> <p>É um mecanismo para adicionar estilo a um documento web.</p> <br>',
'<h1>JavaScript</h1> <br> <p>É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web.</p> <br>',
'<h1>GIT</h1> <br> <p>Um sistema de controle de versão é uma ferramenta que ajuda equipes a gerenciar alterações em código fonte ao longo do tempo.</p>',
'<h1>Em breve</h1>',
'<h1>Em breve</h1>'
]

for(let inicio = 0; inicio < habilidades.length; inicio++) {

habilidades[inicio].addEventListener('mouseover', acaoHabilidades)
habilidades[inicio].addEventListener('mouseout', saidaAcao)
habilidades[inicio].addEventListener('touchstart', touchAcao)

function touchAcao() {

    acaoHabilidade.innerHTML = respostas[inicio]
        
    }

function acaoHabilidades() {

acaoHabilidade.innerHTML = respostas[inicio]
    
}

function saidaAcao() {

acaoHabilidade.innerHTML = `Passe o mouse ou clique em cima dos ícones para saber a funcionalidade da linguagem.`

}    

    

}




