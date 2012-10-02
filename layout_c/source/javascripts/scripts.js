$(document).ready(function() {
  $("#bucket1").hide();
  $("#bucket2").hide();
  $(".overlay").hide();  
  $(".detail").hide();
  $("#pointer1").click(function() {
    $("#bucket1").show();
    $("#heatmap1").css("right","15em");
    $(".notifier").css("right","15em");
  });
  $("#card2").click(function() {
    $("#bucket2").show();
    $("#bucket1").css("right","15em");
    $("#card2").css("max-height","100%");
  });
});
