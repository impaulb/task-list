// Hides input dialog when "+" is clicked
$(".hide-input").on("click", function(){
  $("input").fadeToggle(500);
  $(this).toggleClass("rotated");
});

// Removes task when clicked on "X"
$("ul").on("click", "span", function(){
  $(this).parent().fadeOut(500);
});

// Grays out + crosses out task when clicked
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

// Shows the "X"
$("ul").on("mouseover", "li", function(){
  $(this).children(".delete").removeClass("hidden");
});

// Hides the "X"
$("ul").on("mouseout", "li", function(){
  $(this).children(".delete").addClass("hidden");
});

// Adds a new task when Enter Key is pressed
$("input").on("keypress", function(key){
  if(key.keyCode === 13){
    $("ul").append('<li>' + $(this).val() + '<span class="delete hidden"><i class="fas fa-times"></i></span></li>');
    $(this).val("");
  }
});
