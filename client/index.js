const input = document.querySelector("input");
const form = document.querySelector("form");
//
const dishImg = document.querySelectorAll(".dish-img");
const title = document.querySelectorAll(".title");

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

(async () => {
  try {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/random?number=7&include-tags=vegetarian&apiKey=c4c982d483af4172983db99440d7045c",
      requestOptions
    );
    const result = await response.json();

    for (const key in result.recipes) {
        if (Object.values(result.recipes, key)) {
            const element = result.recipes[key];
            console.log(element);
            
        }
    }

    console.log(result.recipes);
  } catch (error) {
    console.error(error);
  }
})();

form.addEventListener("submit", () => {
  const val = input.value;
  localStorage.setItem("query", val.replace(" ", "").trim().toLowerCase());
});
