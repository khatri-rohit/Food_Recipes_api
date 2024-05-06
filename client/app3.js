const input = document.querySelector("input");
const form = document.querySelector("form");

const recipeTitle = document.querySelector(".recipe-title");
const recipeImg = document.querySelector(".recipe-img");
const summary = document.querySelector(".summary");

const ingredients = document.querySelector(".ingredients");
const list = document.querySelector("ol");

const similarDishs = document.querySelector(".similar-dish");

const ID = localStorage.getItem("foodId");
console.log(ID);
// localStorage.clear()
const requestOptions = {
  method: "GET",
  redirect: "follow",
};

(async () => {
  try {
    // Fetch Information In Bulk API
    const response = await fetch(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${ID}&apiKey=c4c982d483af4172983db99440d7045c`,
      requestOptions
    );
    const result = await response.json();
    recipeTitle.textContent = result[0].title;
    const img = document.createElement("img");
    img.src = result[0].image;
    img.alt = result[0].title;
    img.title = result[0].title;
    recipeImg.appendChild(img);
    const p = document.createElement("p");
    p.innerHTML = result[0].summary;
    summary.appendChild(p);

    // Add Ingredients Data
    const len = result[0].extendedIngredients.length;
    for (var i = 0; i < len; i++) {
      const div = document.createElement("div");
      div.setAttribute("class", "ingred");
      //
      const imgDiv = document.createElement("div");
      imgDiv.setAttribute("class", "ing-img");
      div.appendChild(imgDiv);
      //
      const titDiv = document.createElement("div");
      titDiv.setAttribute("class", "ing-name");
      div.appendChild(titDiv);
      //
      ingredients.appendChild(div);
      //
      const ingImg = document.querySelectorAll(".ing-img");
      const ingName = document.querySelectorAll(".ing-name");
      //
      const Image = document.createElement("img");
      Image.src = `https://img.spoonacular.com/ingredients_100x100/${result[0].extendedIngredients[i].image}`;
      ingImg[i].appendChild(Image);
      ingName[i].textContent = result[0].extendedIngredients[i].nameClean;
    }

    // Add Instructions
    const length = result[0].analyzedInstructions[0].steps.length;
    for (var i = 0; i < length; i++) {
      const li = document.createElement("li");
      li.setAttribute("class", "ins");
      list.appendChild(li);
      const step = document.querySelectorAll(".ins");
      step[i].innerText = result[0].analyzedInstructions[0].steps[i].step;
    }

    const similarFood = await fetch(
      `https://api.spoonacular.com/recipes/${ID}/similar?apiKey=c4c982d483af4172983db99440d7045c`,
      requestOptions
    );
    const similarRecipes = await similarFood.json();

    const similarLen = similarRecipes.length;
    for (var i = 0; i < similarLen; i++) {
      const div = document.createElement("div");
      div.setAttribute("class", "simi-dish");
      div.setAttribute("id", similarRecipes[i].id);
      //
      const imgDiv = document.createElement("div");
      imgDiv.setAttribute("class", "simi-img");
      div.appendChild(imgDiv);
      //
      const titDiv = document.createElement("div");
      titDiv.setAttribute("class", "simi-title");
      div.appendChild(titDiv);
      //
      similarDishs.appendChild(div);

      const img = document.querySelectorAll(".simi-img");
      const name = document.querySelectorAll(".simi-title");
      const Image = document.createElement("img");
      Image.src = `https://img.spoonacular.com/recipes/${similarRecipes[i].id}-556x370.jpg`;
      img[i].appendChild(Image);
      name[i].innerText = similarRecipes[i].title;
    }
    const similarDish = document.querySelectorAll(".simi-dish");
    console.log(similarDish);
    similarDish.forEach((recip) => {
      recip.addEventListener("click", () => {
        localStorage.setItem("foodId", recip.getAttribute("id"));
        console.log("Id Save To LocalStorage");
        console.log(recip.getAttribute("id"));
        window.location = "../Food_Recipes_api/recipe.html";
      });
    });
  } catch (err) {
    console.log(err);
  }
})();

form.addEventListener("submit", () => {
  const val = input.value;
  localStorage.setItem("query", val.replace(" ", "").trim().toLowerCase());
});
