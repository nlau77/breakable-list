class Api::V1::UserRecipesController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    # currently not hitting user

    if current_user.present?

      @recipes=Recipe.all
      @user=current_user

      render json:
        {
        :recipes => @recipes,
        :user => @user
        }
    else
      @recipes= Recipe.all
      render json: @recipes
    end
  end

end
