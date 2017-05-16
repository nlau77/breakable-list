class Api::V1::UserListsController < ApiController
  skip_before_action :verify_authenticity_token

  def index
    user = current_user
    @newest_grocery_list = user.userlists.last
    @recipes = @newest_grocery_list.recipes
    @ingredients_list=[]
    @recipes.each do |recipe|
      recipe.ingredients.each do |ingredient|
        @ingredients_list << ingredient
      end
    end
    if user.userlists.size < 6
      @old_lists = user.userlists.all.order(created_at: :desc)
    else
      @old_lists= user.userlists.order(created_at: :desc)[1..5]
    end
    render json: {
      ingredients: @ingredients_list,
      list: @newest_grocery_list,
      recipes: @recipes,
      oldLists: @old_lists
    }
  end

  def show
    user = current_user
    list_id = params[:id]
    @grocery_list = user.userlists.find(list_id)
    @recipes = @grocery_list.recipes
    @ingredients_list=[]
    @recipes.each do |recipe|
      recipe.ingredients.each do |ingredient|
        @ingredients_list << ingredient
      end
    end
    render json: {
      ingredients: @ingredients_list,
      list: @grocery_list,
      recipes: @recipes
    }

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
      if list_title.strip == ""
        date = Date.parse(Time.now.to_s).strftime("%m/%d")
        list_title = "#{date} Grocery List"
      end
      newList = Userlist.create(title: list_title, user: user)


      recipe_ids.each do |recipe_id|
        recipe = Recipe.find(recipe_id)
        Grocerylist.create(userlist: newList, recipe: recipe)
      end
      @newList = newList
      render json: @newList
    end
  end
end
