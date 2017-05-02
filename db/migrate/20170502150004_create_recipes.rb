class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.text :instructions, null: false

      t.timestamp null: false
    end
  end
end
