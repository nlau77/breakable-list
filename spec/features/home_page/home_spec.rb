require "rails_helper"

feature "Random user views homepage" do
  scenario "Randomuser sees search bar and a log in" do
    visit root_path
    expect(page).to have_content "Grocery Picker"
  end
end
