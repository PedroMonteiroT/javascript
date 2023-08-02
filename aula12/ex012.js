var agora = new Date()
var hora = agora.getHours()
var minuto =agora.getMinutes()
var segundo = agora.getSeconds()
var milissegundo = agora.getMilliseconds()
console.log(`Agora são exatamente ${hora}:${minuto}:${segundo}:${milissegundo}`)
if ( hora < 6){
    console.log('Boa madrugada')
}
else if ( hora < 12){
    console.log('Bom dia')
}
else if ( hora < 18){
    console.log('Boa Tarde')
}
else{
    console.log('Boa noite')
}