FactoryGirl.define do
  factory :recipeingredient do
    amount {"5lbs"}
    recipe {}
    ingredient {}
  end
end
# for test will be need to associated with ingredient and recipe
