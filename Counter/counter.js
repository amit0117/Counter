function increase(){
var number=Number(document.getElementById('value').innerHTML)
console.log(number)
document.getElementById('value').innerHTML=number+1
number=number+1
}
function decrease(){
    var number=Number(document.getElementById('value').innerHTML)
    console.log(number)
    document.getElementById('value').innerHTML=number-1
}
function reset(){
    var number=Number(document.getElementById('value').innerHTML)
    console.log(number)
    document.getElementById('value').innerHTML=0
}