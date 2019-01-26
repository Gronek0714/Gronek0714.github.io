function start() 
{
    if(window.pageYOffset == 0)
    {
        document.getElementById("Home-bt").className = "menu-bt-active";
        document.getElementById("dot1").className = "dot-active";
    }

    if(window.pageYOffset == innerHeight)
    {
        document.getElementById("Me-bt").className = "menu-bt-active";
        document.getElementById("dot2").className = "dot-active";
    }

    if(window.pageYOffset == innerHeight*2)
    {
        document.getElementById("Portfolio-bt").className = "menu-bt-active";
        document.getElementById("dot3").className = "dot-active";
    }

    if(window.pageYOffset == innerHeight*3)
    {
        document.getElementById("Contact-bt").className = "menu-bt-active";
        document.getElementById("dot4").className = "dot-active";
    }
}

window.onload = start;

function scrl(x)
{
    var h = innerHeight;
    var y = 0;
    y = (x-1) * h;
    window.scrollTo(0,y);
    chgklr(x);
}

function chgklr(x)
{
    document.getElementById("Home-bt").className = "menu-bt";
    document.getElementById("Me-bt").className = "menu-bt";
    document.getElementById("Portfolio-bt").className = "menu-bt";
    document.getElementById("Contact-bt").className = "menu-bt";
    document.getElementById("dot1").className = "dot";
    document.getElementById("dot2").className = "dot";
    document.getElementById("dot3").className = "dot";
    document.getElementById("dot4").className = "dot";

    if(x==1)
    {
        document.getElementById("Home-bt").className = "menu-bt-active";
        document.getElementById("dot1").className = "dot-active";

        var element = document.getElementById("faceimg");
        element.classList.remove("face");
        setTimeout(function(){ document.getElementById("faceimg").className = "face"; }, 100);
        
        
        var element = document.getElementById("Home-text");
        element.classList.remove("Home-text-animation");
        setTimeout(function(){ document.getElementById("Home-text").className = "Home-text-animation"; }, 100);
    }

    if(x==2)
    {
        document.getElementById("Me-bt").className = "menu-bt-active";
        document.getElementById("dot2").className = "dot-active";

        var element = document.getElementById("me-content");
        element.classList.remove("mecontent");
        setTimeout(function(){ document.getElementById("me-content").className = "mecontent"; }, 100);
        
        
        var element = document.getElementById("me-img");
        element.classList.remove("meimg");
        setTimeout(function(){ document.getElementById("me-img").className = "meimg"; }, 100);
    }

    if(x==3)
    {
        document.getElementById("Portfolio-bt").className = "menu-bt-active";
        document.getElementById("dot3").className = "dot-active";

        var element = document.getElementById("Port-img");
        element.classList.remove("portimg");
        setTimeout(function(){ document.getElementById("Port-img").className = "portimg"; }, 100);
        
        
        var element = document.getElementById("Port-container");
        element.classList.remove("portcont");
        setTimeout(function(){ document.getElementById("Port-container").className = "portcont"; }, 100);
    }

    if(x==4)
    {
        document.getElementById("Contact-bt").className = "menu-bt-active";
        document.getElementById("dot4").className = "dot-active";
    }

}

window.onwheel = function(){ return false; }

window.addEventListener("keydown", function(e) {
    if([32,33,34, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
