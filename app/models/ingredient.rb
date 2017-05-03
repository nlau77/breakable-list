class Ingredient < ApplicationRecord
  has_many :recipes, through: :recipeingredients
  has_many :recipeingredients

  validates :name, presence: true
end
