var hamButtonOpen = $(".header-right > a");
var hamButtonClose = $(".hamburger-menu > a");
var hamMenu = $(".hamburger-menu");

hamButtonOpen.click(
  function() {
    hamMenu.show(300);
    //oppure hamMenu.fadeIn(300);
  }
);

hamButtonClose.click(
  function() {
    hamMenu.hide(300);
    //oppure hamMenu.fadeOut(300);
  }
);

// $(".header-right > a").click(
//   function() {
//     $(".hamburger-menu").show(300);
//   }
// );
//
// $(".hamburger-menu > a").click(
//   function() {
//     $(".hamburger-menu").hide(300);
//   }
// );
