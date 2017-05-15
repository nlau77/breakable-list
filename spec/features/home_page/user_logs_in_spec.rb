require "rails_helper"

feature "User signs up for an account" do
  scenario "Randomuser sees search bar and a log in" do
    visit root_path
    expect(page).to have_content "Grocery Picker"
    expect(page).to have_link "Log In"
    expect(page).to have_link "Sign Up"
  end
end

feature "User logs in" do
   scenario "User clicks on log in button to log in"
 end
end
