require "rails_helper"

RSpec.describe Api::V1::UserRecipesController, type: :controller do
  let(:json_parsed_response) {JSON.parse(response.body) }
  before(:each) do
    @user = FactoryGirl.create(:user)
    @recipe = FactoryGirl.create(:recipe, owner: @user)
  end

  describe "GET #index" do
    it "Returns the users recipes" do
      sign_in @user
      get :index

      expect(response.status).to eq 200
      expect(json_parsed_response.first["id"]).to eq(@recipe.id)
      expect(json_parsed_response.first["name"]).to eq(@recipe.name)
      expect(json_parsed_response.first["owner_id"]).to eq(@user.id)
    end
  end

  describe "GET #show"do
    let!(:chicken) { Ingredient.create(name:"chicken") }
    let!(:recipeingredient) { Recipeingredient.create(amount:"tbsp", recipe: @recipe, ingredient: chicken) }
    let!(:instruction) {Instruction.create(step:"first step", recipe: @recipe) }

    it "Returns JSON of recipe, recipeingredients, and ingredients" do
      sign_in(@user)
      get :show, params: { id: @recipe.id }
      expect(response.status).to eq 200

      expect(json_parsed_response.keys).to eq ["recipe", "ingredients", "amounts", "instructions"]
      expect(json_parsed_response["recipe"].keys).to eq ["id", "name", "owner_id"]
      expect(json_parsed_response["recipe"]["name"]).to eq @recipe.name
      expect(json_parsed_response["recipe"]["owner_id"]).to eq @user.id

      expect(json_parsed_response["ingredients"][0].keys).to eq ["id", "name"]
      expect(json_parsed_response["ingredients"][0]["id"]).to eq chicken.id
      expect(json_parsed_response["ingredients"][0]["name"]).to eq chicken.name

      expect(json_parsed_response["amounts"][0].keys).to eq ["id", "amount", "recipe_id", "ingredient_id"]
      expect(json_parsed_response["amounts"][0]["id"]).to eq recipeingredient.id
      expect(json_parsed_response["amounts"][0]["amount"]).to eq recipeingredient.amount
      expect(json_parsed_response["amounts"][0]["recipe_id"]).to eq @recipe.id
      expect(json_parsed_response["amounts"][0]["ingredient_id"]).to eq chicken.id


      expect(json_parsed_response["instructions"][0].keys).to eq ["id", "step", "recipe_id", "created_at", "updated_at"]
      expect(json_parsed_response["instructions"][0]["step"]).to eq instruction.step
      expect(json_parsed_response["instructions"][0]["recipe_id"]).to eq instruction.recipe.id
    end
  end

  # describe "POST #create" do
  # # TODO figure out what is causing the parsing error in the body in test environment
  # # maybe problem with how the body is being parsed
  #   let!(:correct_post_params) { {name: "CheeseFries", instructions:"as", ingredients:"asdf" } }
  #   let!(:incorrect_post_params) { { name: "" } }
  #
  #   it "It returns a JSON" do
  #   sign_in(@user)
  #   post :create, params: { post: incorrect_post_params }
  #
  #   expect(response.status).to eq 200
  #   end
  # end

  describe "DELETE #destroy" do

    it "Deletes the recipe from the database" do
      sign_in(@user)
      get :destroy, params: { id: @recipe.id }
      expect(response.status).to eq 200
      expect(json_parsed_response["message"]).to eq ("#{@recipe.name} was deleted")
    end

  end
end
