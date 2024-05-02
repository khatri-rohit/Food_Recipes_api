const p = document.querySelector("#p");
const btn = document.querySelector("#btn");

const requestOptions = {
  method: "GET",
  redirect: "follow",
};

async function food() {
  try {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/informationBulk?ids=654959&apiKey=c4c982d483af4172983db99440d7045c",
      requestOptions
    );
    const result = await response.json();
    // console.log(result);
    p.innerHTML += `Food Recipe and Ingredients<br/> <h3> Steps <h3> <ol> `;
    let temp_response = "";
    let data = result[0].analyzedInstructions[0].steps;
    // console.log(typeof data);
    for (const element in data) {
      if (Object.values(data, element)) {
        const ele = data[element];
        p.innerHTML += `<li> ${ele.step} </li>`;
        console.log(ele.step);
        // temp_response = ele
      }
    }
    p.innerHTML += ` </ol> <br />`;

    console.log(data);

    p.innerHTML += ` <h3> Ingredients <h3> <ol> `;

    data = result[0].extendedIngredients;

    for (const element in data) {
      if (Object.values(data, element)) {
        const ele = data[element];
        p.innerHTML += `<li> ${ele.original} </li>`;
        console.log(ele.original);
      }
    }

    p.innerHTML += ` </ol> <br />`;
    // console.log(temp_response.step);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click", food);
