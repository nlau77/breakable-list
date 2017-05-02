require "rails_helper"

describe Recipeingredient do
  describe "Create recipes and ingredients"
    let!(:recipe) { FactoryGirl.create(:recipe) }

    # interaction with factory girl made FactoryGirl.create(:ingredient)
    # prevented the assocaitons from passing in recipeingredientss
    it "Recipe.ingredients should return a list of ingreidents for the recipe" do
      ingredient1=Ingredient.create(name:"beef")
      ingredient2=Ingredient.create(name:"curry")
      Recipeingredient.create(recipe:recipe, ingredient: ingredient1)
      Recipeingredient.create(recipe:recipe, ingredient: ingredient2)
      expect(recipe.ingredients.first).to eq(ingredient1)
      expect(recipe.ingredients.second).to eq(ingredient2)
  end

end
