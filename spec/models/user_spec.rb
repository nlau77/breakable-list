require 'rails_helper'

RSpec.describe User, type: :model do
  describe "Create a user" do
    let!(:user) {
      User.create(
        username:"Banana",
        email:"user@gmail.com",
        password:"123456",
      )
    }
    it "Should be able to be created" do
      expect(user.username).to eq("Banana")
      expect(user.email).to eq("user@gmail.com")
      expect(user.password).to eq("123456")
    end
  end
end
