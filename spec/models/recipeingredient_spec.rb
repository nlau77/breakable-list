require "rails_helper"

describe Recipeingredient do
  describe "Create recipes and ingredients"
    let!(:recipe) { FactoryGirl.create(:recipe) }
    let!(:ingredient1) { FactoryGirl.create(:ingredient) }
    let!(:ingredient2) { FactoryGirl.create(:ingredient, name:"cheese") }
    # binding.pry
    context "Create link between recipes and ingredients with recipeingredient" do
      let!(:recipeingredient1) {
        Recipeingredient.create(
          amount: "5lbs",
          ingredient: ingredient1,
          recipe: recipe
        )
      }
      let!(:recipeingredient2) {
        Recipeingredient.create(
          amount: "three scoops",
          ingredient: ingredient2,
          recipe: recipe
        )
      }

    end
    it "Recipe.ingredients should return a list of ingreidents for the recipe" do
      binding.pry
  end

end
