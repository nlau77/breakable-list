class Recipe < ApplicationRecord
  belongs_to :owner, class_name: "User", optional: true

  has_many :ingredients, through: :recipeingredients
  has_many :recipeingredients

  validates :name, presence: true
  validates :instructions, presence: true

  has_many :grocerylists 
end
