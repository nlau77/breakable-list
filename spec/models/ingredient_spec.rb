require "rails_helper"

describe Ingredient do
  describe "Create a ingredient"
    let!(:ingredient1) {
      Ingredient.create(
        name:"chicken"
      )
    }
    it "Ingredient should have a name" do
      expect(ingredient1.name).to eq("chicken")
  end

    it "Should also be able find ingredient find_or_create" do
      ingredient = Ingredient.find_or_create_by(name: "chicken")
      expect(ingredient).to eq(ingredient1)
    end

    it "Should create a new ingredient object when the ingredient is not found" do
      ingredient = Ingredient.find_or_create_by(name: "beef")
      expect(ingredient.name).to eq("beef")
    end
end
