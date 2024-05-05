import element  from "./index";
console.log(element);

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// // Searched Page Elements
// const recipeImage = document.querySelector(".rec-img");
// const recipeName = document.querySelector(".rec-title");

// const requestOptions = {
//   method: "GET",
//   redirect: "follow",
// };
// async function searchRecipes(e) {
//   e.preventDefault();
//   try {
//     let recipe = input.value;
//     recipe = recipe.toLowerCase().trim().replace(" ", "");
//     const response = await fetch(
//       `https://api.spoonacular.com/recipes/autocomplete?number=15&query=${recipe}&apiKey=c4c982d483af4172983db99440d7045c`,
//       requestOptions
//     );
//     console.log(response.json());
//     recipeName.innerHTML += "Rohit";
//   } catch (err) {
//     console.log(err);
//   }
// }

// form.addEventListener("submit", searchRecipes);
