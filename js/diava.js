

const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')


const clock = setInterval(function time() {
    let hoje = new Date();
    let hours = hoje.getHours();
    let minutes = hoje.getMinutes();
    let seconds = hoje.getSeconds();

    if(hours < 10 ) hours = '0' + hours
    if(minutes < 10 ) minutes = '0' + minutes
    if(seconds < 10 ) seconds = '0' + seconds

    horas.innerHTML = hours
    minutos.innerHTML = minutes
    segundos.innerHTML = seconds




})
function msg() {

    let ms = document.getElementById('txt')
    let agora = new Date().getHours();

    if( agora < 12 ){

        ms.innerHTML = 'Bom dia !'

    }else if(agora < 18) {
        ms.innerHTML = 'Boa tarde !'

    }else if(agora < 23){
        ms.innerHTML = 'Boa noite !'
    }

}


