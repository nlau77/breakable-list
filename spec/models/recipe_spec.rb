require "rails_helper"

describe Recipe do
  describe "Create a recipe"
    let!(:user) { FactoryGirl.create(:user) }
    let!(:recipe1) {
      Recipe.create(
        name:"Chicken Pot Pie",
        instructions: "Mix Everything together and bake it",
        owner_id: user.id
      )
    }
    it "Recipe should have a name and instructions and can belong to an owner" do
      expect(recipe1.name).to eq("Chicken Pot Pie")
      expect(recipe1.instructions).to eq("Mix Everything together and bake it")
      expect(recipe1.owner_id).to eq(user.id)
  end

end
