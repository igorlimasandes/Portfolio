const primeirop = document.querySelector('.primeiro-p')
const data = new Date()
const hora = data.getHours()

if (hora <= 5) {

primeirop.innerHTML = 'Boa madrugada, sou o'

} else if(hora <= 12) {

primeirop.innerHTML = 'Bom dia, sou o'

} else if(hora <= 18) {

primeirop.innerHTML = 'Boa tarde, sou o'

} else if(hora <= 23) {

primeirop.innerHTML = 'Boa noite, sou o'

}