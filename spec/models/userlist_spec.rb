require "rails_helper"

describe Userlist do
  describe "Create a recipe"
    let!(:user) { FactoryGirl.create(:user) }
    let!(:userlist) {
      Userlist.create(
        title:"Desserts",
        user: user
      )
    }
    it "Userlist should have a title and belong to a user" do
      expect(userlist.title).to eq("Desserts")
      expect(userlist.user).to eq(user)
  end

end
