class Grocerylist < ApplicationRecord

  belongs_to :recipe
  belongs_to :userlist
end
