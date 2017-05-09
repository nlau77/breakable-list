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
      @instructions=@recipe.instructions.order(created_at: :asc)
      @recipe_amount = @recipe.recipeingredients
      # need to grab ingredients second so that it matches the order of the input for amounts
      @ingredients = []
       @recipe.recipeingredients.each do |recipe_ingredient|
         @ingredients << recipe_ingredient.ingredient
       end
      render json: {
        recipe: @recipe,
        ingredients: @ingredients,
        amounts: @recipe_amount,
        instructions: @instructions
      }
    end
  end

  def new
  end

  def create
    body= request.body.read
    parsed_recipe = JSON.parse(body)
    name= parsed_recipe["name"]
    # instructions= parsed_recipe["instructions"]
    # ingredients_string=parsed_recipe["ingredients"]

    recipe=Recipe.new(name: name)
    recipe.owner=current_user
      if recipe.save
        # ingredients = ingredients_string.split(',')
        #   ingredients.each do |ingredient|
        #     item= Ingredient.find_or_create_by(name: ingredient.downcase)
        #     Recipeingredient.create(recipe: recipe, ingredient: item)
        #   end
        @recipe=recipe
        render json: @recipe
      else
        render json: { messages: recipe.errors.full_messages }
      end

  end

  def update
    binding.pry
  end
end
