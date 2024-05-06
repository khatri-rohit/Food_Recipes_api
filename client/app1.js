const input = document.querySelector("input");
const form = document.querySelector("form");
//
const dishImg = document.querySelectorAll(".dish-img");
const title = document.querySelectorAll(".title");
const dish = document.querySelectorAll(".dish");
// 
const popImg = document.querySelectorAll(".pop-img");
const pTitle = document.querySelectorAll(".p-title");
const popDish = document.querySelectorAll(".pop-dish");

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

(async () => {
  try {
    // Home Page Left
    const response1 = await fetch(
      "https://api.spoonacular.com/recipes/random?number=7&include-tags=vegetarian&apiKey=c4c982d483af4172983db99440d7045c",
      requestOptions
    );
    const result1 = await response1.json();
    for (const key in result1.recipes) {
      if (Object.values(result1.recipes, key)) {
        const element = result1.recipes[key];
        const img = document.createElement("img");
        img.src = `https://img.spoonacular.com/recipes/${element.id}-556x370.jpg?apiKey=c4c982d483af4172983db99440d7045c`;
        img.alt = element.title;
        img.title = element.title;
        dishImg[key].appendChild(img);
        title[key].innerHTML = element.title;
        dishImg[key].parentElement.setAttribute('id',`${element.id}`)
        console.log(dishImg[key].parentElement);
        console.log(element.id);
        console.log(element.title);
      }
    }
    console.log(result1.recipes);

    // Home Page Right
    const response2 = await fetch(
      "https://api.spoonacular.com/recipes/random?number=7&include-tags=vegetarian&apiKey=c4c982d483af4172983db99440d7045c",
      requestOptions
    );
    const result2 = await response2.json();
    for (const key in result2.recipes) {
      if (Object.values(result2.recipes, key)) {
        const element = await result2.recipes[key];
        const img = document.createElement("img");
        img.src = `https://img.spoonacular.com/recipes/${element.id}-556x370.jpg?apiKey=c4c982d483af4172983db99440d7045c`;
        img.alt = element.title;
        img.title = element.title;
        popImg[key].appendChild(img);
        pTitle[key].innerHTML = element.title;
        popImg[key].parentElement.setAttribute('id',`${element.id}`)
        console.log(popImg[key].parentElement);
        console.log(element.id);
        console.log(element.title);
      }
    }
    console.log(result2.recipes);

  } catch (error) {
    console.error(error);
  }
})();


dish.forEach((dis) => {
  dis.addEventListener("click", () => {
    localStorage.setItem('foodId',dis.getAttribute('id'))
    console.log("Id Save To LocalStorage");
    console.log(dis.getAttribute("id"));
    window.location = '../Food_Recipes_api/recipe.html'
  });
});

popDish.forEach((pop) => {
  pop.addEventListener("click", () => {
    localStorage.setItem('foodId',pop.getAttribute('id'))
    console.log("Id Save To LocalStorage");
    console.log(pop.getAttribute("id"));
    window.location = '../Food_Recipes_api/recipe.html'
  });
});


form.addEventListener("submit", () => {
  const val = input.value;
  localStorage.setItem("query", val.replace(" ", "").trim().toLowerCase());
});
