require "rails_helper"

describe Instruction do
  describe "Add an instruction to a recipe" do
    let!(:user) { FactoryGirl.create(:user) }
    let!(:recipe1) {
      Recipe.create(
        name:"Chicken Pot Pie",
        owner_id: user.id
      )
    }
    let!(:instruction) {
        Instruction.create(
          step:"first step",
          recipe: recipe1
          )
        }
    it "Instruction should be a part of the recipe" do
    expect(instruction.step).to eq("first step")
    expect(recipe1.instructions.first).to eq(instruction)
    end
  end
end
