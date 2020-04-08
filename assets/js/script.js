$("ul").on("click", "span", function(){
  $(this).parent().addClass("hidden");
});

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

$("ul").on("mouseover", "li", function(){
  $(this).children(".delete").removeClass("hidden");
});

$("ul").on("mouseout", "li", function(){
  $(this).children(".delete").addClass("hidden");
});

$("input").on("keypress", function(key){
  if(key.keyCode === 13){
    $("ul").append('<li>' + $(this).val() + '<span class="delete hidden"><i class="fas fa-times"></i></span></li>');
    $(this).val("");
  }
});
