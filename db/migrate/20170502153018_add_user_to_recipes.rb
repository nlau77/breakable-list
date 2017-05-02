class AddUserToRecipes < ActiveRecord::Migration[5.0]
  def change
    add_column :recipes, :owner_id, :integer
  end
end
