class CreateRecipeingredients < ActiveRecord::Migration[5.0]
  def change
    create_table :recipeingredients do |t|
      t.string :amount

      t.belongs_to :recipes
      t.belongs_to :ingredients
      t.timestamp null: false
    end
  end
end
