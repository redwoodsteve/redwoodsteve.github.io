function allAreBlank(){
    var airliner = document.getElementById("airlinerCHK").checked
    var cargo = document.getElementById("cargoCHK").checked
    var light = document.getElementById("lightCHK").checked
    var modernmilitary = document.getElementById("modernmilitaryCHK").checked
    var oldmilitary = document.getElementById("oldmilitaryCHK").checked
    var seaplane = document.getElementById("seaplaneCHK").checked
    var helicopter = document.getElementById("helicopterCHK").checked
    var misc = document.getElementById("miscCHK").checked
    var gamepass = document.getElementById("gamepassCHK").checked

    if (airliner == false && cargo == false && light == false && modernmilitary == false && oldmilitary == false && seaplane == false && helicopter == false && misc == false && gamepass == false){
        return true
    }
}
function gamepassCheckedOnly(){
    var airliner = document.getElementById("airlinerCHK").checked
    var cargo = document.getElementById("cargoCHK").checked
    var light = document.getElementById("lightCHK").checked
    var modernmilitary = document.getElementById("modernmilitaryCHK").checked
    var oldmilitary = document.getElementById("oldmilitaryCHK").checked
    var seaplane = document.getElementById("seaplaneCHK").checked
    var helicopter = document.getElementById("helicopterCHK").checked
    var misc = document.getElementById("miscCHK").checked
    var gamepass = document.getElementById("gamepassCHK").checked

    if (airliner == false && cargo == false && light == false && modernmilitary == false && oldmilitary == false && seaplane == false && helicopter == false && misc == false && gamepass == true){
        return true
    }
}