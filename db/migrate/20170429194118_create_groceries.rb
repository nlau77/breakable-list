class CreateGroceries < ActiveRecord::Migration[5.0]
  def change
    create_table :groceries do |t|
      t.string :item, null: false

      t.timestamp null: false
    end
  end
end
