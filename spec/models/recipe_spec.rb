require "rails_helper"

describe Recipe do
  describe "Create a recipe"
    let!(:recipe1) {
      Recipe.create(
        name:"Chicken Pot Pie",
        instructions: "Mix Everything together and bake it"
      )
    }
    it "Recipe should have a name and instructions" do
      expect(recipe1.name).to eq("Chicken Pot Pie")
      expect(recipe1.instructions).to eq("Mix Everything together and bake it")
  end

end
