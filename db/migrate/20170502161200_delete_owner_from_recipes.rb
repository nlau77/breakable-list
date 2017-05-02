class DeleteOwnerFromRecipes < ActiveRecord::Migration[5.0]
  def change
    remove_column :recipes, :owner_id 
  end
end
