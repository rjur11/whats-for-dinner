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
var recipeDisplay = document.querySelector(".recipe-display");
var homeView = document.querySelector(".home-view");
var allRecipeView = document.querySelector(".allrecipes-view");
var sidesDiv = document.querySelector(".sides");
var mainsDiv = document.querySelector(".mains");
var dessertsDiv = document.querySelector(".desserts");
var homePageButt = document.querySelector(".meal-button");
var addSideButt = document.querySelector(".add-side");
var addMainButt = document.querySelector(".add-main");
var addDessertButt = document.querySelector(".add-dessert");
var sideInput = document.querySelector("#sides");
var mainInput = document.querySelector("#mains");
var dessertInput = document.querySelector("#desserts");

letsCookButt.addEventListener("click", pullDish);
clearButt.addEventListener("click", resetSelection);
addRecipeButt.addEventListener("click", swapToRecipes);
homePageButt.addEventListener("click", swapToPick);
addSideButt.addEventListener("click", addSide);
addMainButt.addEventListener("click", addMain);
addDessertButt.addEventListener("click", addDessert);

function swapToRecipes() {
  homeView.classList.add("hidden");
  allRecipeView.classList.remove("hidden");
  homePageButt.classList.remove("hidden");
  addRecipeButt.classList.add("hidden");
  addDishes(sides, sidesDiv, "sides");
  addDishes(mains, mainsDiv, "mains");
  addDishes(desserts, dessertsDiv, "desserts");
}

function swapToPick() {
  homeView.classList.remove("hidden");
  allRecipeView.classList.add("hidden");
  homePageButt.classList.add("hidden");
  addRecipeButt.classList.remove("hidden");
}

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

function addSide() {
  var sideValue = sideInput.value;
  if (!sides.includes(sideValue) && sideValue !== "") {
    sides.push(sideValue);
    addDishes(sides, sidesDiv, "sides");
    sideInput.value = "";
  }
}

function addMain() {
  var mainValue = mainInput.value;
  if (!mains.includes(mainValue) && mainValue !== "") {
    mains.push(mainValue);
    addDishes(mains, mainsDiv, "mains");
    mainInput.value = "";
  }
}

function addDessert() {
  var dessertValue = dessertInput.value;
  if (!desserts.includes(dessertValue) && dessertValue !== "") {
    desserts.push(dessertValue);
    addDishes(desserts, dessertsDiv, "desserts");
    dessertInput.value = "";
  }
}

function pullRandomRecipe(array) {
  return Math.floor(Math.random() * array.length);
}

function addDishes(dishes, dishDiv, dishType) {
  var dishHTML = "";
  for (var i = 0; i < dishes.length; i++) {
    dishHTML += `<p class="${dishType}-${i}">${dishes[i]} <button class="dlt-${dishType}">Dlt</button><button class="edit-${dishType}">Edit</button></p>`;
  }
  dishDiv.innerHTML = dishHTML;
  addDeleteButton(dishes, dishDiv, dishType);
  addEditButton(dishes, dishDiv, dishType);
}

function addDeleteButton(dishes, dishDiv, dishType) {
  var delButtons = document.querySelectorAll(`.dlt-${dishType}`);
  for (var i = 0; i < delButtons.length; i++) {
    const tmp = i;
    delButtons[i].addEventListener("click", function() {
      dishes.splice(tmp, 1);
      addDishes(dishes, dishDiv, dishType);
    });
  }
}

function addEditButton(dishes, dishDiv, dishType) {
  var editButtons = document.querySelectorAll(`.edit-${dishType}`);
  for (var i = 0; i < editButtons.length; i++) {
    const tmp = i;
    editButtons[i].addEventListener("click", function() {
      var dishP = document.querySelector(`.${dishType}-${tmp}`);
      dishP.innerHTML = `<input type="text" value="${dishes[tmp]}" class="edit-input-${dishType}-${tmp}"><button class="save-${dishType}-${tmp}">Save</button>`;
      var saveButton = document.querySelector(`.save-${dishType}-${tmp}`);
      saveButton.addEventListener("click", function() {
        var editValue = document.querySelector(`.edit-input-${dishType}-${tmp}`)
          .value;
        dishes[tmp] = editValue;
        addDishes(dishes, dishDiv, dishType);
      });
    });
  }
}
