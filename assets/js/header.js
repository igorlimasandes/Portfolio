const btnMobile = document.querySelector(".btn-mobile")
const itens = document.querySelectorAll(".nav-item")
const header = document.querySelector('header')

function mostrarmenu() {

const nav = document.querySelector('nav')
nav.classList.toggle('mobile')

}

btnMobile.addEventListener('click', mostrarmenu);

function saidamenu() {

    const nav = document.querySelector('nav')
    nav.classList.remove('mobile')


}

for(inicio = 0; inicio < itens.length; inicio++){
    itens[inicio].addEventListener('click', saidamenu)
    }

function mudarbackground() {

header.classList.toggle('scrollativo', scrollY > 400)

}    

window.addEventListener('scroll', mudarbackground)


    



