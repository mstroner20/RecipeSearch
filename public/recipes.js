

var finalURL = '';
var clicked = 0; 

function recipeClicked(){
    clicked+=1;
    if(clicked % 2 == 0){
        //remove js and re display
        removeOldDiv(); 
        getSelectedRecipes(); 
    }
    else{
        getSelectedRecipes();
    }
}

function getSelectedRecipes(){
    let ingredientsArr = [];

    const db = firebase.firestore();
    let currSelected = db.collection("Ingredients");

    var input = document.getElementsByTagName("input");

    for(var i = 0; i < input.length; i++){
        if(input[i].type == "checkbox" && input[i].checked == true){
            let str = input[i].className; 
            str = str.replace(/\s/g, '');
            ingredientsArr.push(str);
        }
    }

    if(ingredientsArr == ''){
        alert("You must selected some ingredients to be searched for. ");
    }
    else{
        createFetchLink(ingredientsArr);
    }

   
}

function createFetchLink(arr){

    let fetchURL = 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=';

    for(let i = 0; i< arr.length; i++){
        if(i == 0){

            fetchURL = fetchURL + arr[i];

        }
        else{
            fetchURL = fetchURL + "%2C" + arr[i];
        }
        
        
        
    }
    fetchURL = fetchURL + "&number=5&ranking=1&ignorePantry=true";

    finalURL = fetchURL;
    console.log(finalURL);
    getRecipesFromIngredients();
    
     
}




function getRecipesFromIngredients(){




var data;


fetch(`${finalURL}`, {      
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
	alert("Could not find any recipes related to the ingredients you selected. ")
});
}

function printData(data){


    for(i = 0; i < 5; i++){
        var newDiv = document.createElement("div");
        
        var elem = document.createElement("img");
        var link = document.createElement("a");
        var lineBreak = document.createElement("br");

        newDiv.id = "newImgDiv";
        newDiv.className = "recipeImg";
        
        elem.src = data[i].image;

        link.href = `http://www.google.com/search?q=${data[i].title}`;
        link.id = "newLink"
        link.textContent = data[i].title;
        link.target = "_blank";

        
        document.getElementById("recipeImages").appendChild(newDiv);
        document.getElementById("newImgDiv").appendChild(elem);
        
        document.getElementById("newImgDiv").appendChild(link);
        document.getElementById("newImgDiv").appendChild(lineBreak);
        document.getElementById("newImgDiv").appendChild(lineBreak);
        
        
    }
}

function removeOldDiv(){
    var old = document.getElementsByClassName("recipeImg");
    for(var i = 0; i < 5; i++){
        old[i].remove();
        console.log(old[i]);
    }
   
}

/*

function getRecipesFromIngredients(){
    var fake = "";
    getSelectedRecipes();
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
 */