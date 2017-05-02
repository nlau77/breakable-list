class UpdateRecipeWithOwner < ActiveRecord::Migration[5.0]
  def change
    change_table :recipes do |table|
      table.belongs_to :owner
    end
  end
end
