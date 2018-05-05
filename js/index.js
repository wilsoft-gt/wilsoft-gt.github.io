window.onscroll = function () {navChange(); parallax();};

//this section makes the menu transparent or gray on scroll
function navChange() {
  var scrolling = this.pageYOffset;
  var play = document.getElementsByClassName('navCont')[0];
  if (scrolling >= 450) {
    play.style.backgroundColor = "#111";
  } else{
    play.style.backgroundColor = "transparent";
  }
}

function parallax(){
  var scrolling = this.pageYOffset;
  var hero = document.getElementsByClassName('hero')[0];
  var move = hero.getAttribute('move-top');
  var newPos = (scrolling * move / 100);
  //hero.setAttribute("style", "transform: translate(0px, " + newPos + "px)");
  hero.style.backgroundPosition = "center " + newPos + "px" ;
}