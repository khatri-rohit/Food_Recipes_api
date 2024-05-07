const input = document.querySelector("input");
const form = document.querySelector("form");
// Seaarched Page
const recipeImage = document.querySelectorAll(".rec-img");
const recipeName = document.querySelectorAll(".rec-title");
const recipe = document.querySelectorAll(".recipe");

const element = localStorage.getItem("query");
localStorage.clear()

const requestOptions = {
  method: "GET",
  redirect: "follow",
};
(async () => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/autocomplete?number=15&query=${element}&apiKey=32c5ffce39e64e37aa6da7c7caae44ad`,
      requestOptions
    );
    const result = await response.json();
    for (const key in result) {
      if (Object.values(result, key)) {
        const el = await result[key];
        const img = document.createElement("img");
        img.src = `https://img.spoonacular.com/recipes/${el.id}-556x370.jpg?apiKey=32c5ffce39e64e37aa6da7c7caae44ad`;
        img.alt = el.title;
        img.title = el.title;
        recipeImage[key].appendChild(img);
        recipeName[key].innerHTML = el.title;
        recipeImage[key].parentElement.setAttribute("id", `${el.id}`);
      }
    }
  } catch (error) {
    console.error(error);
  }
})();

recipe.forEach((rec) => {
  rec.addEventListener("click", () => {
    localStorage.setItem('foodId',rec.getAttribute('id'))
    window.location = '../Food_Recipes_api/recipe.html'
  });
});


form.addEventListener("submit", () => {
  const val = input.value;
  localStorage.setItem("query", val.replace(" ", "").trim().toLowerCase());
});
