function load() {
    $(".loading").animate({
        height: "0vh"
      }, 500, function() {
        $(".loading").hide();
      });
}
function togglenav() {
    $("body").toggleClass("nav-open");
    }
function encp(){
    var w = document.documentElement.clientWidth;
    if(+w >= +800) {
        $("body").removeClass("nav-open");
    }}
window.addEventListener("resize", encp);
encp();