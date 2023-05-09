var music = document.getElementById("music");
var store = document.getElementById("store");
var game = document.getElementById("game");
var tour = document.getElementById("tour");

$.get('config.txt',{},function(content){
    var links = content.split("*");
    console.log(links);
    if (links[0] != null && links[0] != "") music.href = links[0]; else {music.parentElement.style.opacity = 0.4; music.parentElement.style.pointerEvents = "none"; if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) music.parentElement.style.display = "none"; }
    if (links[1] != null && links[1] != "") store.href = links[1]; else {store.parentElement.style.opacity = 0.4; store.parentElement.style.pointerEvents = "none"; if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) store.parentElement.style.display = "none";}
    if ((links[3] != null && links[3] != "") && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) game.href = links[2]; else {game.parentElement.style.opacity = 0.4; game.parentElement.style.pointerEvents = "none"; if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) game.parentElement.style.display = "none";}
    if (links[2] != null && links[2] != "") tour.href = links[3]; else {tour.parentElement.style.opacity = 0.4; tour.parentElement.style.pointerEvents = "none";}
});

if(isSafari()){
    music.parentElement.style.display = "flex";
    music.style.top = "0.45em";
    store.parentElement.style.display = "flex";
    store.style.top = "0.45em";
    game.parentElement.style.display = "flex";
    game.style.top = "0.45em";
    tour.parentElement.style.display = "flex";
    tour.style.top = "0.45em";
}
function agentHas(keyword) {
    return navigator.userAgent.toLowerCase().search(keyword.toLowerCase()) > -1;
    }
function isSafari() {
    return agentHas("Safari") && !agentHas("Chrome") && !agentHas("CriOS");
    }