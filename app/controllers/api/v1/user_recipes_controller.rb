class Api::V1::UserRecipesController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    if current_user.present?
      # binding.pry
      user= current_user
      @user_custom_recipes=user.custom_recipes
      render json: @user_custom_recipes
    else
      @recipes= Recipe.all
      render json: @recipes
    end
  end
end
