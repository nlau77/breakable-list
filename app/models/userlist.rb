class Userlist < ApplicationRecord
  belongs_to :user

  has_many :grocerylists
  has_many :recipes, through: :grocerylists
end
