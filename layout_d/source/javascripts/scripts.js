$(document).ready(function() {
  $("#heatmap1").hide();
  $("#heatmap2").hide();
  $("#bucket1").hide();
  $("#bucket2").hide();
  $(".overlay").hide();  
  $(".detail").hide();
  $("#icon1").click(function() {
    $("#heatmap1").slideDown();
  });
  $("#pointer1").click(function() {
    $("#bucket1").show();
    $("#heatmap1").css("margin-right","15em");
  });
  $("#card1").click(function() {
    $("#detail1").show();
    $("#bucket1").hide();
    $("#heatmap2").show();
    $("#heatmap1").hide();
  });
  $("#pointer4").click(function() {
    $("#bucket2").show();
    $("#detail1").css("right","16em");
    $("#heatmap2").css("right","16em");
  });
});
