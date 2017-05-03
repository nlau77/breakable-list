class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_many :custom_recipes, class_name: "Recipe", foreign_key: "owner_id"


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
