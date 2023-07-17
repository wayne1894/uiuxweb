// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 115 || document.documentElement.scrollTop > 115) {
    document.getElementById("navbar").setAttribute("style", "top: 0; background-color: rgba(255,255,255,1);");
  } else {
    document.getElementById("navbar").setAttribute("style", "top: -70; background-color: rgba(255,255,255,.4);");
  }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("hamburger").setAttribute("style", "opacity:1;");
  } else {
    document.getElementById("hamburger").setAttribute("style", "opacity:0;");
  }
}
