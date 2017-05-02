class Grocery < ApplicationRecord
  belongs_to :owner, class_name: "User", optional: true

  validates :name, presence: true
  validates :instructions, presence: true
end
