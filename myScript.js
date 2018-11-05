function recipeClick() {
  var button = document.getElementsByClassName("button");
  var buttonID = document.getElementById("buttonID");
  var i;

  if(buttonID.innerHTML == "Recipe") {
    buttonID.innerHTML = "Click Again";
  } else {
    buttonID.innerHTML = "Recipe";
  }

  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function recipeClick() {
      this.classList.toggle("active");
      var recipe = this.nextElementSibling;

      if (recipe.style.maxHeight){
        recipe.style.maxHeight = null;
      } else {
        recipe.style.maxHeight = recipe.scrollHeight + "px";
      }
    });
  }
}