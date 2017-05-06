class CreateGrocerylists < ActiveRecord::Migration[5.0]
  def change
    create_table :grocerylists do |t|
      t.belongs_to :recipe, null: false
      t.belongs_to :userlist, null: false
    end
  end
end
