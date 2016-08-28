$(function () {
  var pageHeight = $("html").height();
  var navHeight = $(".header").outerHeight(true);
  var contentHeight = pageHeight - navHeight;
  $(".content").css("margin-top", navHeight);


})

function navDisplay(x) {
  x.classList.toggle("change");
  $(".topnav").toggle("menuHide");
}
