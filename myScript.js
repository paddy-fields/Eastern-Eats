function recipeClick() {
  var button = document.getElementsByClassName("recipeButton");
  var i;

  for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var recipe = this.nextElementSibling;

      if (recipe.style.maxHeight) {
        recipe.style.maxHeight = null;
      } else {
        recipe.style.maxHeight = recipe.scrollHeight + "px";
      }
    });
  }
}