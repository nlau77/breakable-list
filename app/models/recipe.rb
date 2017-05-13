class Recipe < ApplicationRecord
  belongs_to :owner, class_name: "User", optional: true

  has_many :ingredients, through: :recipeingredients
  has_many :recipeingredients

  has_many :instructions

  validates :name, presence: true
  validates :name, length: {maximum: 35}
  # validates :instructions, presence: true

  has_many :grocerylists
end
