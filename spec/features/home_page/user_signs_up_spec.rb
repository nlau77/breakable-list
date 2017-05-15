require "rails_helper"

feature "User signs up for an account" do
  scenario "User sees sign up and log in" do
    visit root_path
    expect(page).to have_content "Grocery Picker"
    expect(page).to have_link "Log In"
    expect(page).to have_link "Sign Up"
  end
  scenario "User visits sign up page" do
    visit root_path
    first(:link, "Sign Up").click
    fill_in "Email", with: "userx@gmail.com"
    fill_in "Username", with: "Mario"
    fill_in "Password", with: "123456"
    fill_in "Password confirmation", with: "123456"
    click_button "Sign up"
    expect(page).to have_link "Log Out"
    expect(page).to have_content "Mario"
    expect(page).not_to have_content "Log In"
    expect(page).not_to have_content "Sign Up"
  end
end
