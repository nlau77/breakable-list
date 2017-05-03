class Grocery < ApplicationRecord

  validates :name, presence: true
  validates :instructions, presence: true
  
end
