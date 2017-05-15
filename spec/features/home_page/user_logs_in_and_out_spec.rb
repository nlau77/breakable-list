require "rails_helper"

feature "User logs in to an account" do
  let!(:user) { FactoryGirl.create(:user) }

  scenario "User visits log in page" do
    visit root_path
    first(:link, "Log In").click
    fill_in "Email", with: "userx@gmail.com"
    fill_in "Password", with: "123456"
    click_button "Log in"
    expect(page).to have_content user.username
    expect(page).to have_link "Log Out"
  
  end

  # scenario "User signs out" do
  # getting no defined method for login_as
    # user2=User.create(username:"Bob",email:"test@gmail.com",password:"123456")
    # login_as(user2, :scope => :user)
  #   # visit roth_path
  #   # click_link "Log Out"
  #   # expect(page).to have_content "Please log in first!"
  # end

end
