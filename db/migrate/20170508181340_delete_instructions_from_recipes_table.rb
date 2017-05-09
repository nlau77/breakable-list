class DeleteInstructionsFromRecipesTable < ActiveRecord::Migration[5.0]

  def up
    remove_column :recipes, :instructions
  end

  def down
    add_column :recipes, :instructions, :string, null: false
  end
end
