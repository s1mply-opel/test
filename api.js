import axios from 'axios';

const key = `77d2cedd5a944b288f0de0648f282b1e`;
const baseUrl = `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${key}`;


const ingredientList = ['apple', 'flour', 'sugar'];

//
function fetchRecipeByIngredients(ingredientList) {
	const ls = ingredientList.join(",+");
	var url = `${baseUrl}&ingredients=${ls}`;

	console.log(`Making a request to ${url}`);
	
	var recipes = [];
	return axios.get(url).then((response) => {
		var res = response.data;
		var recipeMatch = res.length;

		for (var i = 0; i < recipeMatch; i++) {
			var recipe = {
				id: res[i].id,
				image: res[i].image,
				missedIngredientCount: res[i].missedIngredientCount,
				missedIngredients: res[i].missedIngredients
			};
			recipes.push(recipe);
		}
		//console.log(res);
		return recipes;
	}).catch((error) => {
		throw new error;
	});
}

const createIngredient = (name, amount) => ({
	ingredientName: name,
	ingredientAmount: amount,
});

const filterIngredientList = (ingredientList, filterName) => {
	console.log("Test");
}


console.log(obj);
//await fetchRecipeByIngredients(ingredientList);