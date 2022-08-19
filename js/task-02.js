const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsList = document.getElementById('ingredients');

const ingredientsItemsArray = ingredients.map(ingredient => {
  const newIngridient = document.createElement('li');
  newIngridient.textContent = ingredient;
  newIngridient.classList.add('item');
  return newIngridient;
});

ingredientsList.append(...ingredientsItemsArray);
