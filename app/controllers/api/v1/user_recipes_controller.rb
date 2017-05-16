class Api::V1::UserRecipesController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
      user= current_user
      @user_custom_recipes=user.custom_recipes.order(name: :asc)
      render json: @user_custom_recipes
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
    # if current_user.present?
      body= request.body.read
      parsed_recipe = JSON.parse(body)
      name= parsed_recipe["name"]
      recipe=Recipe.new(name: name)
      recipe.owner=current_user
        if recipe.save

          @recipe=recipe
          render json: @recipe
        else
          render json: { messages: recipe.errors.full_messages }
        end
    # end
  end

  # def update
  #   binding.pry
  # end

  def destroy
    # binding.pry
    id=params[:id]
    # user=current_user
    recipe=Recipe.find(id)
    name=recipe.name
    recipe.recipeingredients.destroy_all
    recipe.instructions.destroy_all
    recipe.destroy
    # if recipe.owner= user
    # end
    render json: {message: "#{name} was deleted" }
  end
end
