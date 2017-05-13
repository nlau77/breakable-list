class Recipeingredient < ApplicationRecord

  belongs_to :ingredient
  belongs_to :recipe

  validates :amount, length: { maximum: 15 }
end
