const edamamApi = "https://api.edamam.com/search?";
const api_id = "&app_id=8aed0130";
const api_key = "&app_key=10bf9207b3dc2e5353697f16d6db3510";
const result_count = "&from=0&to=20";
const vegetarianHealthLabel = "&health=vegetarian";
const veganHealthLabel = "&health=vegan";
const peanutHealthLabel = "&health=peanut-free";
const balancedHealthLabel = "&diet=balanced";

window.onload = function() {
  //automatically play audio on page load (doesn't work anymore with new Chrome)
  document.getElementById("audio").play();

  let submitted = document.getElementById("typeIngredients");
  const recipeUrl = document.getElementById("recipeLink");
  const ingredients = document.getElementById("ingredients");
  const recipeImg = document.getElementById("recipeImg");
  const numServings = document.getElementById("servings");
  const recipeItems = document.getElementById("recipe");
  const recipeTitle = document.getElementById("recipeTitle");

  //returns all the inputs as a new array object "checkkedArr"
  let checkedArr = [].slice.call(document.querySelectorAll("input"));

  submitted.addEventListener("submit", function(e) {
    e.preventDefault();
    let randArrayItem = Math.floor(Math.random() * 20);
    let ingredient = "q=" + submitted.item.value;
    let checkedValues = "";

    checkedArr.forEach(element => {
      if (element.checked) {
        console.log(element.id);
        switch (element.id) {
          case "vegetarian":
            checkedValues += vegetarianHealthLabel;
            break;
          case "vegan":
            checkedValues += veganHealthLabel;
            break;
          case "no-peanut":
            checkedValues += peanutHealthLabel;
            break;
          case "balanced":
            checkedValues += balancedHealthLabel;
            break;
        }
        // console.log(checkedValues);
      }
    });
    let url =
      edamamApi + ingredient + checkedValues + api_id + api_key + result_count;

    //less efficient way of doing the above switch statements:

    // let vegetarianValue = document.getElementById("vegetarian");
    // let veganValue = document.getElementById("vegan");
    // let balancedValue = document.getElementById("balanced");

    // if (veganValue.checked) {
    //   console.log("vegan");
    //   url =
    //     edamamApi +
    //     ingredient +
    //     veganHealthLabel +
    //     api_id +
    //     api_key +
    //     result_count;
    // } else if (vegetarianValue.checked) {
    //   console.log("vegetarian");
    //   url =
    //     edamamApi +
    //     ingredient +
    //     vegetarianHealthLabel +
    //     api_id +
    //     api_key +
    //     result_count;
    // } else if (balancedValue.checked) {
    //   console.log("balanced");
    //   url =
    //     edamamApi +
    //     ingredient +
    //     balancedHealthLabel +
    //     api_id +
    //     api_key +
    //     result_count;
    // }
    // if (vegetarianValue.checked && balancedValue.checked) {
    //   console.log("vegetarian and balanced");
    //   url =
    //     edamamApi +
    //     ingredient +
    //     balancedHealthLabel +
    //     vegetarianHealthLabel +
    //     api_id +
    //     api_key +
    //     result_count;
    // } else if (veganValue.checked && balancedValue.checked) {
    //   console.log("vegan and balanced");
    //   url =
    //     edamamApi +
    //     ingredient +
    //     balancedHealthLabel +
    //     veganHealthLabel +
    //     api_id +
    //     api_key +
    //     result_count;
    // } else {
    //   url = edamamApi + ingredient + api_id + api_key + result_count;
    // }

    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);

        const recipe = json.hits[randArrayItem].recipe;
        console.log(recipe);

        //print recipe title
        recipeTitle.style.display = "block";
        recipeTitle.innerHTML = recipe.label;

        //print servings number
        numServings.innerHTML = "Servings: " + recipe.yield;
        numServings.style.display = "block";

        //print out recipe line by line
        let recipeList = recipe.ingredientLines;
        let listItem = "";
        for (let i = 0; i < recipeList.length; i++) {
          let listNumber = i + 1 + ". ";
          listItem += listNumber + " " + recipeList[i] + "<br><br>";
        }

        recipeItems.style.display = "block";
        recipeItems.innerHTML = listItem;
        ingredients.style.display = "block";

        //get food image for each recipe
        recipeImg.style.display = "block";
        recipeImg.src = recipe.image;

        //link to original recipe
        recipeUrl.style.display = "block";
        recipeUrl.onclick = function() {
          window.open(recipe.url);
        };
      })
      .then(json => {
        console.log(json);
        document.getElementById("errorMessage").innerHTML = "";
      })
      .catch(err => {
        console.log(err);
        document.getElementById("errorMessage").innerHTML =
          "I'm sorry. Either we don't have any options for " +
          submitted.item.value +
          " or there was an error. Please try again.";
        ingredients.style.display = "none";
        recipeImg.style.display = "none";
        numServings.style.display = "none";
        recipe.style.display = "none";
        recipeTitle.style.display = "none";
        recipeUrl.style.display = "none";
      });
  });
};