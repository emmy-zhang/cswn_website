// smooth scroll
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

// change header image
function changeImage()
{
    var img = document.getElementById("home");
    document.img.style.background="url(img.src)";

    x++;

    if(x >= images.length){
        x = 0;
    }

    fadeImg(img, 100, true);
    setTimeout("changeImage()", 3000);
}

function fadeImg(el, val, fade){
    if(fade === true){
        val--;
    }else{
        val ++;
    }

    if(val > 0 && val < 100){
        el.style.opacity = val / 100;
        setTimeout(function(){fadeImg(el, val, fade);}, 10);
    }
}

var images = [],
x = 0;

images[0] = "images/officers/group1.jpg";
images[1] = "images/officers/group2.jpg";
images[2] = "image3.jpg";
setTimeout("changeImage()", 3000);
