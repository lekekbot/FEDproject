// supporting pages:
// - index.html
// - service.html
// - uiux.html
// - serverhost.html
// - mobapp.html
// - ecommerce.html
// - work.html
// - about.html
// - career.html
// - contact.html

// scroll function for navbar
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

    if ($(window).width() < 1025) {
      //if window width is lower than 1025px, display none
      $(".scroll-logo").css("display", "none")
      $("#nav").css("margin", "0")

    } else {
      //if not, do this
      $(".scroll-logo").css("display", "initial")
      $("#nav").css({
        "top": "0",
        "margin-left": "0"
      })
      $(".navbar-nav").css("padding-right", "0");
      $("#navbarResponsive").css("padding-right", "0");
    }
  } else {
    $("#nav").css("top", "28px");

    if ($(window).width() < 1025) {
      $("#nav").css("margin-left", "0");
      $(".navbar-nav").css("padding-right", "0");
    } else {
      $("#nav").css("margin-left", "95px");
      $(".navbar-nav").css("padding-right", "95px");

    }
    $(".scroll-logo").css("display", "none")
    $("#navbarResponsive").css("padding-right", "0");
  }
}

// call scroll function using window onscroll
window.onscroll = function () {
  scrollFunction()
};

//declaring constants
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";

//window on load / resize,
$(window).on("load resize", function () {
  
  //call scroll function because it changes the navbar onload/resize
  scrollFunction()

  //for dropdown navbar
  if (this.matchMedia("(min-width: 1025px)").matches) {
    $dropdown.hover(
      function () {
        // make dropdown appear
        const $this = $(this)
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      // if out of hover
      function () {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }

  // if window width is smaller than 767px
  if (this.matchMedia("(max-width:1025px").matches) {
    // to expand dropdown
    const $this = $($dropdown);
    $this.addClass(showClass);
    $this.find($dropdownToggle).attr("aria-expanded", "true");
    $this.find($dropdownMenu).addClass(showClass);

  } else if (this.matchMedia("(min-width:1025px").matches) {
    //remove dropdown
    const $this = $($dropdown);
    $this.removeClass(showClass);
    $this.find($dropdownToggle).attr("aria-expanded", "false");
    $this.find($dropdownMenu).removeClass(showClass);
  } else {
    $dropdown.off();
  }
});
