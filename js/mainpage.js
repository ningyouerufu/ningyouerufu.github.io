window.onload = init;
var social=document.getElementsByClassName("social-icon");
var i=0;
function init(){
    var avatar = document.getElementById("avatar");
    var welcome = document.getElementById("welcome");
    var into = document.getElementById("intoblog");
    avatar.style.opacity = "1";
    avatar.style.top = "70px";
    welcome.style.opacity = "1";
    into.style.opacity = "1";
    timeset=setInterval(function(){
        if (i<4){
            social[i].style.opacity = "1";
            i++;
        } else{
            clearInterval(timeset)
        }
    },800);
}
function qrcode(){
    var avatar = document.getElementById("avatar");
    avatar.style.backgroundImage = "url('images/qrcode.png')";
    avatar.style.borderRadius = "0";
}
function avatar(){
    var avatar = document.getElementById("avatar");
    avatar.style.backgroundImage = "url('images/avatar.png')";
    avatar.style.borderRadius = "50%";
}


