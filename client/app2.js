const input = document.querySelector("input");
const form = document.querySelector("form");
// Seaarched Page
const recipeImage = document.querySelectorAll(".rec-img");
const recipeName = document.querySelectorAll(".rec-title");

const element = localStorage.getItem("query");

const requestOptions = {
  method: "GET",
  redirect: "follow",
};
(async () => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/autocomplete?number=15&query=${element}&apiKey=c4c982d483af4172983db99440d7045c`,
      requestOptions
    );
    const result = await response.json();
    for (const key in result) {
      if (Object.values(result, key)) {
        const el = await result[key];
        const img = document.createElement('img')       
        // const imgResponse = 
        img.src =  (`https://img.spoonacular.com/recipes/${el.id}-556x370.jpg?apiKey=c4c982d483af4172983db99440d7045c`)
        img.alt = el.title
        img.title = el.title
        recipeImage[key].appendChild(img)
        recipeName[key].innerHTML = el.title
      }
    }
    console.log(result);
    recipeImage.forEach((ele) => {
      console.log(ele);
    });
  } catch (error) {
    console.error(error);
  }
})();

console.log(localStorage.getItem("query"));

form.addEventListener("submit", () => {
  const val = input.value;
  localStorage.setItem("query", val.replace(" ", "").trim().toLowerCase());
});
