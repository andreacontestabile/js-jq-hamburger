var hamButtonOpen = $(".header-right > a ");
var hamButtonClose = $(".close");
var hamMenu = $(".hamburger-menu");

hamButtonOpen.click(
  function() {
    hamMenu.addClass("active");
  }
);

hamButtonClose.click(
  function() {
    hamMenu.removeClass("active");
  }
);

// $(".header-right > a").click(
//   function() {
//     $(".hamburger-menu").show(300);
        //oppure hamMenu.fadeIn(300);
//   }
// );
//
// $(".hamburger-menu > a").click(
//   function() {
//     $(".hamburger-menu").hide(300);
        //oppure hamMenu.fadeOut(300);
//   }
// );
