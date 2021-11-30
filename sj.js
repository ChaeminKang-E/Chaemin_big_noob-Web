function add(a, b){
    return a+b
}
function circ(n){
    return Math.floor((n*n*Math.PI)*1000)/1000
}
function smaller(a, b){
    return a+b>100?true:false
}
function leap(y){
    return y%4==0?true:false
}
function ten(a, b){
    return a==10||b==10||a+b==10?true:false
}
let XfromF = circ(10)
console.log(XfromF)