# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170508182058) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "groceries", force: :cascade do |t|
    t.string "item", null: false
  end

  create_table "grocerylists", force: :cascade do |t|
    t.integer "recipe_id",   null: false
    t.integer "userlist_id", null: false
    t.index ["recipe_id"], name: "index_grocerylists_on_recipe_id", using: :btree
    t.index ["userlist_id"], name: "index_grocerylists_on_userlist_id", using: :btree
  end

  create_table "ingredients", force: :cascade do |t|
    t.string "name", null: false
  end

  create_table "instructions", force: :cascade do |t|
    t.string   "step",       null: false
    t.integer  "recipe_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["recipe_id"], name: "index_instructions_on_recipe_id", using: :btree
  end

  create_table "recipeingredients", force: :cascade do |t|
    t.string  "amount"
    t.integer "recipe_id"
    t.integer "ingredient_id"
    t.index ["ingredient_id"], name: "index_recipeingredients_on_ingredient_id", using: :btree
    t.index ["recipe_id"], name: "index_recipeingredients_on_recipe_id", using: :btree
  end

  create_table "recipes", force: :cascade do |t|
    t.string  "name",     null: false
    t.integer "owner_id"
    t.index ["owner_id"], name: "index_recipes_on_owner_id", using: :btree
  end

  create_table "userlists", force: :cascade do |t|
    t.string   "title",      null: false
    t.integer  "user_id",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_userlists_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "username",                            null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

end
