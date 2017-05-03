class Api::V1::UsersController < ApiController
  skip_before_action :verify_authenticity_token, only: [:create, :update]

  def index
    if current_user.present?
      @current_user=current_user
      render json: @current_user
    end
  end
end
