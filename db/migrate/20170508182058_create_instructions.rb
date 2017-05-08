class CreateInstructions < ActiveRecord::Migration[5.0]
  def change
    create_table :instructions do |t|
      t.string :step, null: false

      t.belongs_to :recipe
      t.timestamps null: false
    end
  end
end
