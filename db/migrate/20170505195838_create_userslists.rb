class CreateUserslists < ActiveRecord::Migration[5.0]
  def change
    create_table :userlists do |t|
      t.string :title, null: false

      t.belongs_to :user, null: false
      t.timestamps null: false
    end
  end
end
