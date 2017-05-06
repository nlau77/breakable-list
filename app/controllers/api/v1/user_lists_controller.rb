class Api::V1::UserListsController < ApiController
  skip_before_action :verify_authenticity_token

  def show
    # binding.pry
  end

  def update
    binding.pry
  end

  def create
    user = current_user
    body = request.body.read
    parsed_list = JSON.parse(body)
    recipe_ids = parsed_list["recipes"]
    list_title = parsed_list["title"]
    if recipe_ids ==[]
      # return some message
    else
      if list_title = ""
        list_title = "You forgot to add a title"
      end
      newList = Userlist.create(title: list_title, user: user)
    end
  end
end
