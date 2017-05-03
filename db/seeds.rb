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

user1= User.create(username: "user", email: "user@gmail.com", password: "123456")
Recipe.create(name: "Chicken Pot Pie", instructions: "Put it in the oven", owner_id: user1.id)
Recipe.create(name: "Curry vegetables", instructions: "Put everything into a pot", owner_id: user1.id)
beef_and_brocolli = Recipe.create(name: "Beef and Brocolli", instructions: "Stir fry it")


ingredient_array=["beef", "curry", "peas", "brocolli"]

ingredient_array.each do |ingredient|
  Ingredient.create(name: ingredient)
end

recipe_ingredients_list = ["beef", "brocolli"]

recipe_ingredients_list.each do |ingredient|
  item = Ingredient.find_or_create_by(name: ingredient)
  Recipeingredient.create(recipe:beef_and_brocolli, ingredient: item)
end
