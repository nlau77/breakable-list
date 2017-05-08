# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Recipe.destroy_all
Ingredient.destroy_all
Recipeingredient.destroy_all
Userlist.destroy_all

user1= User.create(username: "user", email: "user@gmail.com", password: "123456")

chicken_pot_pie= Recipe.create(name: "Chicken Pot Pie", instructions: " Mix it together and put it in the oven", owner: user1)
  recipe_ingredients_list = ["chicken", "peas", "carrots", "butter", "pie crust"]
    recipe_ingredients_list.each do |ingredient|
      item = Ingredient.find_or_create_by(name: ingredient)
      Recipeingredient.create(amount:"3lbs", recipe:chicken_pot_pie, ingredient: item)
    end

beef_and_brocolli = Recipe.create(name: "Beef and Brocolli", instructions: "Stir fry it", owner: user1)
  recipe_ingredients_list = ["beef", "brocolli"]
  recipe_ingredients_list.each do |ingredient|
    item = Ingredient.find_or_create_by(name: ingredient)
    Recipeingredient.create(amount:"4lbs", recipe:beef_and_brocolli, ingredient: item)
  end


Recipe.create(name: "Curry vegetables", instructions: "Put everything into a pot", owner: user1)

ingredient_array=["beef", "curry", "peas", "brocolli"]
ingredient_array.each do |ingredient|
  Ingredient.create(name: ingredient)
end

Userlist.create(title:"heres a list", user: user1)
Userlist.create(title:"another list", user: user1)
