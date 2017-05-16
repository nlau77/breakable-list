require "rails_helper"

RSpec.describe Api::V1::UserListsController, type: :controller do
  let(:json_parsed_response) {JSON.parse(response.body) }
  before(:each) do
    @user = FactoryGirl.create(:user)
    @test_recipe = FactoryGirl.create(:recipe, owner: @user)
    @test_userlist = Userlist.create(title:"list", user: @user)
    @test_ingredient = Ingredient.create(name:"ingredient")
    @test_recipe_ingredient=Recipeingredient.create(recipe:@recipe, ingredient:@ingredient)
    @test_list=Grocerylist.create(recipe:@recipe, userlist:@userlist)
  end

  describe "GET #index" do
    it "Returns the users last userlist" do
      sign_in @user
      get :index
      expect(response.status).to eq 200
      expect(json_parsed_response.keys).to eq ["ingredients", "list", "recipes", "oldLists"]
    end
  end

  describe "GET #show"do
    it "It returns JSON of target userlist" do
      sign_in(@user)
      get :show, params: { id: @test_userlist.id }
      expect(response.status).to eq 200
      expect(json_parsed_response.keys).to eq ["ingredients", "list", "recipes"]
    end
  end
end
