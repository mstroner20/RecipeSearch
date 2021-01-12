/*
function getRecipesFromIngredients(){

var data;

fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=milk%2Ceggs%2Clamb&number=5&ranking=1&ignorePantry=true", {
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

    

    for(i = 0; i < 5; i++){
        var newDiv = document.createElement("div");
        newDiv.id = "newImgDiv";
        var elem = document.createElement("img");
        var text = document.createElement("h3");
        var lineBreak = document.createElement("br");
        
        elem.src = data[i].image;
        text.textContent = "This is a bloody Test";
        document.getElementById("recipeImages").appendChild(newDiv);
        document.getElementById("newImgDiv").appendChild(elem);
        document.getElementById("newImgDiv").appendChild(text);
        document.getElementById("newImgDiv").appendChild(lineBreak);
        
        

    }

    
    

    

}
*/


function getRecipesFromIngredients(){
    var fake = "";
    printData(fake);
}
function printData(fake){

   

    for(i = 0; i < 5; i++){
        
        var newDiv = document.createElement("div");
        newDiv.id = "newImgDiv";
        var elem = document.createElement("img");
        var text = document.createElement("h3");
        var lineBreak = document.createElement("br");
        
        elem.src = "dior.jpg"
        text.textContent = "This is a bloody Test";
        document.getElementById("recipeImages").appendChild(newDiv);
        document.getElementById("newImgDiv").appendChild(elem);
        document.getElementById("newImgDiv").appendChild(text);
        document.getElementById("newImgDiv").appendChild(lineBreak);
        
        
        
        
    
    }

}
 