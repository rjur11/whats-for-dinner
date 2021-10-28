var sides = [
  "Miso Glazed Carrots",
  "Coleslaw",
  "Garden Salad",
  "Crispy Potatoes",
  "Sweet Potato Tots",
  "Coconut Rice",
  "Caeser Salad",
  "Shrimp Summer Rolls",
  "Garlic Butter Mushrooms",
  "Hush Puppies"
];

var mains = [
  "Spaghetti and Meatballs",
  "Pineapple Chicken",
  "Shakshuka",
  "Thai Yellow Curry",
  "Bibimbap",
  "Chicken Parmesean",
  "Butternut Squash Soup",
  "BBQ Chicken Burgers",
  "Ramen",
  "Empanadas",
  "Chicken Fried Rice",
  "Sheet Pan Fajitas",
  "Margarita Pizza"
];

var desserts = [
  "Apple Pie",
  "Lemon Meringue Pie",
  "Black Forest Cake",
  "Banana Bread",
  "Peach Cobbler",
  "Cheesecake",
  "Funfetti Cake",
  "Baklava",
  "Flan",
  "Macarons",
  "Macaroons",
  "Chocolate Cupcakes",
  "Pavlova",
  "Pumpkin Pie",
  "Key Lime Pie",
  "Tart Tatin",
  "Croissants",
  "Eclairs"
];

var addRecipeButt = document.querySelector(".recipe-button");
var sideButt = document.querySelector("#side");
var mainButt = document.querySelector("#main");
var dessertButt = document.querySelector("#dessert");
var allButt = document.querySelector("#entire");
var letsCookButt = document.querySelector(".lets-cook");
var potImg = document.querySelector(".cookpot");
var recipeBox = document.querySelector(".recipe");
var recipeTag = document.querySelector(".recipetag");
var clearButt = document.querySelector(".clear");
var allRecipesButt = document.querySelector("#allrecipes");
var recipeDisplay = document.querySelector(".recipe-display");

letsCookButt.addEventListener("click", pullDish);
clearButt.addEventListener("click", resetSelection);
allRecipesButt.addEventListener("click", swapToRecipes);

function pullDish() {
  if (sideButt.checked) {
    swapPot();
    showRecipe(sides);
  } else if (mainButt.checked) {
    swapPot();
    showRecipe(mains);
  } else if (dessertButt.checked) {
    swapPot();
    showRecipe(desserts);
  } else {
    console.log("ignore me");
  }
}

function swapPot() {
  potImg.classList.add("hidden");
  recipeDisplay.classList.remove("hidden");
}

function showRecipe(array) {
  recipeBox.innerText = `${array[pullRandomRecipe(array)]}!`;
}

function resetSelection() {
  potImg.classList.remove("hidden");
  recipeDisplay.classList.add("hidden");
}

function pullRandomRecipe(array) {
  return Math.floor(Math.random() * array.length);
}
