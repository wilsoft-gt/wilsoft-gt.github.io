

function ImgParallax() {

    var screenx = window.innerWidth;
    var screeny = window.innerHeight;

    var xpos = event.clientX;
    var ypos = event.clientY;

    xpercent = (xpos*100)/screenx;    
    ypercent = (ypos*100)/screeny;

    xtransform = Math.round(((-70*xpercent)/100)+35);
    ytransform = Math.round(((70*ypercent)/100)-35);


    document.getElementById("mainImg").style.transform = "rotateY("+xtransform +"deg) rotateX("+ytransform +"deg)";
    document.getElementById("mainImg").style.WebkitTransform = "rotateY("+ xtransform+"deg) rotateX("+ytransform +"deg)";
    document.getElementById("mainImg").style.msTransform = "rotateY("+ xtransform+"deg) rotateX("+ytransform +"deg)";
}