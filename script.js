$(".Part-two-yes").hide();
$(".Part-two-no").hide();
$(".Ending-yes").hide();


$(".yes-button").click(function() {
    $(".Part-two-yes").show();
    $(".start").hide();
});


$(".no-button").click(function() {
    $(".Part-two-no").show();
    $(".start").hide();
});


$(".secondImage").click(function() {
    $(".Ending-yes").show();
    $(".Part-two-yes").hide();
});


$(".lastImage").dblclick(function() {
    $(".Ending-yes").css("background-color", "pink");
    $(".last-message").text("You pulled the string and THE DONUT EXPLODING CAUSING IT TO RAIN DONUT BITES. YAAAAAAAY YOU WON!!!!!!");
    $(".lastImage").attr("src", "https://media1.giphy.com/media/l2JdU5gv9TRLKl9jG/giphy.gif");
    $("h2").hide();
    $("h3").hide();

});