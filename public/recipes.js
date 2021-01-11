function getRecipesFromIngredients(){

var data;

fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=rice%2Cchicken%2Csteak&number=5&ranking=1&ignorePantry=true", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "09fdfdf010msh9500f94e1190e33p19240cjsn26b193e09883",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(json => {
    data = json;
    printData(data);
    
})



	

.catch(err => {
	console.error(err);
});




}

function printData(data){

    var elem = document.createElement("img");
    elem.src = data[2].image;
    console.log(data[2].image);

    document.getElementById("image").appendChild(elem);

}