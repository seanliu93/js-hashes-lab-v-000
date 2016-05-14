'use strict';
function addIngredient(hash, key, val){
  hash[key] = val;
  return hash;
}

function removeIngredient(hash, key) {
  delete hash[key];
  return hash;
}

function updateIngredient(hash, key, val) {
  hash[key] = val;
  return hash;
}

function readRecipe(recipe) {
  Object.keys(recipe).forEach(function (ingredient) {
     console.log('this recipe calls for ' + recipe[ingredient] + ' of ' + ingredient);
   });
}