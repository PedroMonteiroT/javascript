function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date();
var hora= data.getHours()
msg.innerHTML = 'Agora são ' + hora + ' horas'

if( hora < 12){
    img.src = 'imagens/manhã.jpg'
    document.body.style.backgroundColor='yellow'
}
else if( hora<18){
    img.src = 'imagens/tarde.jpg'
    document.body.style.backgroundColor='orange'
}
else{
    img.src = 'imagens/noite.jpg'
    document.body.style.backgroundColor='blue'
}
}