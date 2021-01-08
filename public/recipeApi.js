var options = {
  method: 'GET',
  url: "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
  headers: { 
    'cache-control': 'no-cache',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': "09fdfdf010msh9500f94e1190e33p19240cjsn26b193e09883",
    'header1': 'header-value-1'
  },
  qs: { 
    parameter1: 'parameter-value-1' 
  }
};

request(options, function (error, response, body) {
  if (error) throw new Error(error);
  console.log(body);
});