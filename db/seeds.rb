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
Instruction.destroy_all


beef=Ingredient.create(name:"beef")
chicken=Ingredient.create(name:"chicken")
broccoli=Ingredient.create(name:"broccoli")
mushrooms=Ingredient.create(name:"mushrooms")
onions=Ingredient.create(name:"onions")
cheese=Ingredient.create(name:"cheese")
eggs=Ingredient.create(name:"eggs")
soy_sauce=Ingredient.create(name:"soy sauce")
osyer_sauce=Ingredient.create(name:"oyster sauce")
corn_starch=Ingredient.create(name:"corn_starch")
garlic=Ingredient.create(name:"garlic")


user1= User.create(username: "user", email: "user@gmail.com", password: "123456")

chicken_pot_pie= Recipe.create(name: "Chicken Pot Pie", owner: user1)
  recipe_ingredients_list = ["chicken", "peas", "carrots", "butter", "pie crust"]
    recipe_ingredients_list.each do |ingredient|
      item = Ingredient.find_or_create_by(name: ingredient)
      Recipeingredient.create(amount:"3lbs", recipe:chicken_pot_pie, ingredient: item)
    end
    Instruction.create(step:"first step", recipe:chicken_pot_pie )
    Instruction.create(step:"second step", recipe:chicken_pot_pie )
    Instruction.create(step:"third step", recipe:chicken_pot_pie )
    Instruction.create(step:"fourth step", recipe:chicken_pot_pie )
    Instruction.create(step:"fifth step", recipe:chicken_pot_pie )

beef_and_brocolli = Recipe.create(name: "Beef and Brocolli", owner: user1)
  Recipeingredient.create(amount:"8 oz", recipe:beef_and_brocolli, ingredient: beef)
  Recipeingredient.create(amount:"3 cups", recipe:beef_and_brocolli, ingredient: broccoli)
  Recipeingredient.create(amount:"1 tbsb", recipe:beef_and_brocolli, ingredient: soy_sauce)
  Recipeingredient.create(amount:"1 tbsb", recipe:beef_and_brocolli, ingredient: osyer_sauce)
  Recipeingredient.create(amount:"1 tbsb", recipe:beef_and_brocolli, ingredient: corn_starch)
  Recipeingredient.create(amount:"1 clove", recipe:beef_and_brocolli, ingredient: garlic)
  Instruction.create(step:"Bring water to a boil and blanch broccoli for two minutes. Set Aside for", recipe:beef_and_brocolli )
  Instruction.create(step:"Heat a pan over medium high heat add beef and brown for 3 minutes. Add garlic and brown for 1-2 more minutes ", recipe:beef_and_brocolli )
  Instruction.create(step:"Add broccoli, oystersauce, soy sauce", recipe:beef_and_brocolli )
  Instruction.create(step:"Mix cornstarch with a table spoon of water and it to the pan", recipe:beef_and_brocolli )
  Instruction.create(step:"Stir for one more minute and enjoy!", recipe:beef_and_brocolli )

Recipe.create(name: "Curry vegetables", owner: user1)

ingredient_array=["beef", "curry", "peas", "brocolli"]
ingredient_array.each do |ingredient|
  Ingredient.create(name: ingredient)
end

Userlist.create(title:"heres a list", user: user1)
Userlist.create(title:"another list", user: user1)
