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
  for (var key in recipe) {
    console.log("this recipe calls for " + recipe[key] " of " key);
  }
}