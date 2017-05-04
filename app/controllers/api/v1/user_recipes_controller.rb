class Api::V1::UserRecipesController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    if current_user.present?
      user= current_user
      @user_custom_recipes=user.custom_recipes
      render json: @user_custom_recipes
    else
      @recipes= Recipe.all
      render json: @recipes
    end
  end

  def show
    if current_user.present?
      id=params[:id]
      @recipe= Recipe.find(id)
      @ingredients = @recipe.ingredients
      render json: {
        recipe: @recipe,
        ingredients: @ingredients
      }
    end
  end

  def new
    binding.pry
  end

  def create
    body= request.body.read
    parsed_recipe = JSON.parse(body)
    name= parsed_recipe["name"]
    instructions= parsed_recipe["instructions"]
    ingredients_string=parsed_recipe["ingredients"]

    recipe=Recipe.new(name: name, instructions: instructions)
    recipe.owner=current_user
      if recipe.save
        ingredients = ingredients_string.split(',')
          ingredients.each do |ingredient|
            item= Ingredient.find_or_create_by(name: ingredient)
            Recipeingredient.create(recipe: recipe, ingredient: item)
          end
      end

  end

  def update
    binding.pry
  end
end
