class Api::V1::IngredientsController < ApiController
  skip_before_action :verify_authenticity_token

  def create
    body= request.body.read
    parsed_body = JSON.parse(body)
    recipe_id= parsed_body["recipeId"]
    item= parsed_body["item"]
    amount=parsed_body["amount"]
    recipe=Recipe.find(recipe_id)
    if item.strip != ""
      ingredient= Ingredient.find_or_create_by(name: item.downcase)
      if !recipe.ingredients.include?(ingredient)
        Recipeingredient.create(amount: amount,recipe: recipe, ingredient: ingredient)
      end
    end
  end

end
