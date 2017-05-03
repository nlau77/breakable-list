class Recipe < ApplicationRecord
  belongs_to :owner, class_name: "User", optional: true

  has_many :ingredients, through: :recipeingredients
  has_many :recipeingredients
end
