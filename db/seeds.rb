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
oyster_sauce=Ingredient.create(name:"oyster sauce")
corn_starch=Ingredient.create(name:"corn starch")
garlic=Ingredient.create(name:"garlic")
curry_powder=Ingredient.create(name:"curry powder")
fish_sauce=Ingredient.create(name:"fish sauce")
potato=Ingredient.create(name:"potato")
chicken_breast=Ingredient.create(name:"chicken breast")
red_pepper_flake=Ingredient.create(name:"red pepper flakes")
olive_oil=Ingredient.create(name:"olive oil")
vegetable_oil=Ingredient.create(name:"vegetable oil")
canola_oil=Ingredient.create(name:"canola oil")
sesame_oil=Ingredient.create(name:"sesame oil")
kombu=Ingredient.create(name:"kombu")
silken_tofu=Ingredient.create(name:"silken tofu")
shrimp=Ingredient.create(name:"shrimp")
ramen_noodle=Ingredient.create(name:"ramen noodle")
anchovy=Ingredient.create(name:"anchovy")
scallion=Ingredient.create(name:"scallion")
butter=Ingredient.create(name:"butter")
flour=Ingredient.create(name:"flour")
yeast=Ingredient.create(name:"yeast")
sugar=Ingredient.create(name:"sugar")
cheddar=Ingredient.create(name:"cheddar cheese")
bread=Ingredient.create(name:"bread")
bread_crumbs=Ingredient.create(name:"bread crumbs")
parsley=Ingredient.create(name:"parsley")
parmesan=Ingredient.create(name:"parmesan cheese")
milk=Ingredient.create(name:"milk")
onion_powder=Ingredient.create(name:"onion powder")
garlic_powder=Ingredient.create(name:"garlic powder")
cayenne=Ingredient.create(name:"cayenne pepper")
spaghetti=Ingredient.create(name:"spaghetti")
white_wine=Ingredient.create(name:"white wine")
shallots=Ingredient.create(name:"shallots")
chicken_thigh=Ingredient.create(name:"chicken thighs")
salt=Ingredient.create(name:"salt")
vanilla_extract=Ingredient.create(name:"vanilla extrac")


user1= User.create(username: "Visitor", email: "user@test.com", password: "123456")

# chicken_pot_pie= Recipe.create(name: "Chicken Pot Pie", owner: user1)
#   recipe_ingredients_list = ["chicken", "peas", "carrots", "butter", "pie crust"]
#     recipe_ingredients_list.each do |ingredient|
#       item = Ingredient.find_or_create_by(name: ingredient)
#       Recipeingredient.create(amount:"3lbs", recipe:chicken_pot_pie, ingredient: item)
#     end
#     Instruction.create(step:"first step", recipe:chicken_pot_pie )
#     Instruction.create(step:"second step", recipe:chicken_pot_pie )
#     Instruction.create(step:"third step", recipe:chicken_pot_pie )
#     Instruction.create(step:"fourth step", recipe:chicken_pot_pie )
#     Instruction.create(step:"fifth step", recipe:chicken_pot_pie )

beef_and_brocolli = Recipe.create(name: "Beef and Brocolli", owner: user1)
  Recipeingredient.create(amount:"8 oz", recipe:beef_and_brocolli, ingredient: beef)
  Recipeingredient.create(amount:"2 cups", recipe:beef_and_brocolli, ingredient: broccoli)
  Recipeingredient.create(amount:"1 tbsp", recipe:beef_and_brocolli, ingredient: soy_sauce)
  Recipeingredient.create(amount:"1 tbsp", recipe:beef_and_brocolli, ingredient: oyster_sauce)
  Recipeingredient.create(amount:"1/2 tbsp", recipe:beef_and_brocolli, ingredient: corn_starch)
  Recipeingredient.create(amount:"1 clove", recipe:beef_and_brocolli, ingredient: garlic)

  Instruction.create(step:"Bring water to a boil and blanch broccoli for two minutes. Set Aside for", recipe:beef_and_brocolli )
  Instruction.create(step:"Heat a pan over medium high heat add beef and brown for 3 minutes. Add garlic and brown for 1-2 more minutes ", recipe:beef_and_brocolli )
  Instruction.create(step:"Add broccoli, oystersauce, soy sauce", recipe:beef_and_brocolli )
  Instruction.create(step:"Mix cornstarch with a table spoon of water and it to the pan", recipe:beef_and_brocolli )
  Instruction.create(step:"Stir for one more minute and enjoy!", recipe:beef_and_brocolli )

curry_chicken=Recipe.create(name: "Curry Chicken", owner: user1)
  Recipeingredient.create(amount:"3 lbs", recipe:curry_chicken, ingredient:chicken)
  Recipeingredient.create(amount:"2-3 tbsp", recipe:curry_chicken, ingredient:curry_powder)
  Recipeingredient.create(amount:"1 medium", recipe:curry_chicken, ingredient:onions)
  Recipeingredient.create(amount:"2 large", recipe:curry_chicken, ingredient:potato)
  Recipeingredient.create(amount:"3 ounce", recipe:curry_chicken, ingredient:fish_sauce)
  Recipeingredient.create(amount:"2 teaspoon", recipe:curry_chicken, ingredient:red_pepper_flake)

  Instruction.create(step:"Brown chicken over medium high heat for 10 minutes", recipe:curry_chicken )
  Instruction.create(step:"Add onions and cook for 3-5 minutes", recipe:curry_chicken )
  Instruction.create(step:"Add curry powder and stir for 1 minute", recipe:curry_chicken )
  Instruction.create(step:"Mix in potatos, cover to the top with water", recipe:curry_chicken )
  Instruction.create(step:"Bring to a boil and simmer for 30 minutes", recipe:curry_chicken )
  Instruction.create(step:"Stir in fish sauce and adjust with salt to taste", recipe:curry_chicken )

stir_fry_broccoli=Recipe.create(name: "Lightly Stir-fried Broc", owner: user1)
  Recipeingredient.create(amount:"3 lbs", recipe:stir_fry_broccoli, ingredient:broccoli)
  Recipeingredient.create(amount:"2 cloves", recipe:stir_fry_broccoli, ingredient:garlic)
  Recipeingredient.create(amount:"1 1tsb", recipe:stir_fry_broccoli, ingredient:canola_oil)

  Instruction.create(step:"Boil a pot of water", recipe:stir_fry_broccoli)
  Instruction.create(step:"Cut broccoli into bit sized pieces", recipe:stir_fry_broccoli)
  Instruction.create(step:"mince garlic, set aside", recipe:stir_fry_broccoli)
  Instruction.create(step:"blanch broccoli for 2-3 minutes", recipe:stir_fry_broccoli)
  Instruction.create(step:"drain and run under cool water, let dry for a few minute", recipe:stir_fry_broccoli)
  Instruction.create(step:"add oil to a pan with garlic on medium high heat", recipe:stir_fry_broccoli)
  Instruction.create(step:"add brollic, stir for 2 minutes, add a pinch of salt", recipe:stir_fry_broccoli)

scrambled_eggs = Recipe.create(name:"Scrambled Eggs", owner: user1)
  Recipeingredient.create(amount:"3", recipe:scrambled_eggs, ingredient: eggs )
  Recipeingredient.create(amount:"2 teaspoon", recipe:scrambled_eggs ,ingredient:butter)

  Instruction.create(step:"beat 3 eggs in a bowl", recipe:scrambled_eggs)
  Instruction.create(step:"melt butter in a pan over medium heat", recipe:scrambled_eggs)
  Instruction.create(step:"pour in eggs and gently push settled eggs towards the center", recipe:scrambled_eggs)
  Instruction.create(step:"take off heat before eggs are fully cooked(message)", recipe:scrambled_eggs)

tofu_stew = Recipe.create(name:"Soft Tofu Soup", owner: user1)
  Recipeingredient.create(amount:"3", ingredient:eggs,recipe:tofu_stew )
  Recipeingredient.create(amount:"1 tbsp", ingredient:sesame_oil,recipe:tofu_stew )
  Recipeingredient.create(amount:"1 sheet", ingredient:kombu,recipe:tofu_stew )
  Recipeingredient.create(amount:"1/2 lb", ingredient: beef,recipe:tofu_stew )
  Recipeingredient.create(amount:"2 boxes", ingredient:silken_tofu,recipe:tofu_stew )
  Recipeingredient.create(amount:"1 medium", ingredient:onions,recipe:tofu_stew )
  Recipeingredient.create(amount:"1lb", ingredient:shrimp,recipe:tofu_stew )
  Recipeingredient.create(amount:"1 pack", ingredient:ramen_noodle,recipe:tofu_stew )
  Recipeingredient.create(amount:"1/2 cup", ingredient:anchovy,recipe:tofu_stew )
  Recipeingredient.create(amount:"2 tbsp", ingredient:red_pepper_flake,recipe:tofu_stew )
  Recipeingredient.create(amount:"4-6 ounces", ingredient:fish_sauce,recipe:tofu_stew )
  Recipeingredient.create(amount:"half bunch", ingredient:scallion,recipe:tofu_stew )

  tofu_instructions=["simmer kombu, anchovies, and onion in medium stock pot of water for 1 hour",
     "In a separate stock pot slightly brown beef and red pepper flakes for a few minutes",
     "Pour in stock and bring to a boil",
     "Mix in broken up silken tofu and shrimp",
     "Add in sesame oil, beaten eggs, scallions, and fish sauce",
     "(optional) add ramen noodles to make it a full meal"]

     tofu_instructions.each do |step|
       Instruction.create(step:step, recipe:tofu_stew)
     end

pizza_dough = Recipe.create(name: "Pizza Dough", owner: user1)
  Recipeingredient.create(amount:"4 cups", ingredient:flour, recipe:pizza_dough )
  Recipeingredient.create(amount:"1 package", ingredient:yeast, recipe:pizza_dough )
  Recipeingredient.create(amount:"4 tbsp", ingredient:olive_oil,recipe:pizza_dough )
  Recipeingredient.create(amount:"2 tbsp", ingredient:sugar,recipe:pizza_dough )

  Instruction.create(step:"bloom yeast in 2 cups of water with sugar for 10 minutes", recipe:pizza_dough)
  Instruction.create(step:"add olive oil, teaspoon salt and slowly mix in flour", recipe:pizza_dough)
  Instruction.create(step:"knead dough for 20 minutes and let it rise for an hour", recipe:pizza_dough)
  Instruction.create(step:"use right away or store in the fridge", recipe:pizza_dough)

grilled_cheese = Recipe.create(name: "Grilled Cheese", owner: user1)
 Recipeingredient.create(amount:"2 slices", ingredient:cheddar, recipe:grilled_cheese )
 Recipeingredient.create(amount:"2 slices", ingredient:bread, recipe:grilled_cheese )
 Recipeingredient.create(amount:"dallop", ingredient:butter, recipe:grilled_cheese )
  Instruction.create(step:"layer cheese between two slices of bread", recipe:grilled_cheese)
  Instruction.create(step:"spread butter on both sides of the sandwich", recipe:grilled_cheese)
  Instruction.create(step:"toast over medium-medium high heat on each side until brown", recipe:grilled_cheese)

meatball = Recipe.create(name: "Easy Meatballs", owner: user1)
  Recipeingredient.create(amount:"1 cup", ingredient:bread_crumbs, recipe:meatball)
  Recipeingredient.create(amount:"2", ingredient:eggs, recipe:meatball)
  Recipeingredient.create(amount:"2 lbs", ingredient:beef, recipe:meatball)
  Recipeingredient.create(amount:"1/4 cup", ingredient:parsley, recipe:meatball)
  Recipeingredient.create(amount:"2 cups", ingredient:milk, recipe:meatball)
  Recipeingredient.create(amount:"1 cup", ingredient:parmesan, recipe:meatball)
  Recipeingredient.create(amount:"1 tbsp", ingredient:onion_powder, recipe:meatball)
  Recipeingredient.create(amount:"1 tbsp", ingredient:garlic_powder, recipe:meatball)
  Recipeingredient.create(amount:"1 tsp", ingredient:cayenne, recipe:meatball)

  Instruction.create(step:"soak bread crumbs with milk for 15 minutes", recipe:meatball)
  Instruction.create(step:"combine all other ingredients and mix gently. Do not overmix!", recipe:meatball)
  Instruction.create(step:"Bake at 375 for 30 minutes or until done. Enjoy!", recipe:meatball)


shrimp_scampi = Recipe.create(name: "Shrimp Scampi", owner: user1)
  Recipeingredient.create(amount:"3 cloves", ingredient:garlic, recipe:shrimp_scampi)
  Recipeingredient.create(amount:"2", ingredient:shallots, recipe:shrimp_scampi)
  Recipeingredient.create(amount:"1 lb", ingredient:shrimp, recipe:shrimp_scampi)
  Recipeingredient.create(amount:"half box", ingredient:spaghetti, recipe:shrimp_scampi)
  Recipeingredient.create(amount:"1/2 cup", ingredient: white_wine, recipe:shrimp_scampi)
  Recipeingredient.create(amount:"1/4 cup", ingredient:parmesan, recipe:shrimp_scampi)
  Recipeingredient.create(amount:"1/8 cup", ingredient:parsley, recipe:shrimp_scampi)

  Instruction.create(step:"Bring a pot of water to a boil", recipe:shrimp_scampi)
  Instruction.create(step:"Saute shallots and garlic in a pan for 3 minutes", recipe:shrimp_scampi)
  Instruction.create(step:"Add pasta to water with a generous amount of salt ", recipe:shrimp_scampi)
  Instruction.create(step:"Add shrimp to garlic and shallots and cook for 5 minutes", recipe:shrimp_scampi)
  Instruction.create(step:"Deglaze with the white wine and slightly reduce", recipe:shrimp_scampi)
  Instruction.create(step:"Drain al dente pasta and add to the pan to finish cooking", recipe:shrimp_scampi)
  Instruction.create(step:"Finish off with parmesan cheese and and parsley", recipe:shrimp_scampi)


crepes = Recipe.create(name: "Quick Crepes", owner: user1)
  Recipeingredient.create(amount:"2 tbsp", ingredient:butter, recipe:crepes)
  Recipeingredient.create(amount:"2", ingredient:eggs, recipe:crepes)
  Recipeingredient.create(amount:"1/2 cup", ingredient:milk, recipe:crepes)
  Recipeingredient.create(amount:"1 cup", ingredient:flour, recipe:crepes)
  Recipeingredient.create(amount:"1/4 tsp", ingredient:salt, recipe:crepes)

  Instruction.create(step:"Melt butter and combined all ingredients into a blender with 1/2 cup water", recipe:crepes)
  Instruction.create(step:"Blend to combine and let the mixture set for 20 minutes in the fridge", recipe:crepes)
  Instruction.create(step:"When making the crepes, pour out small amounts of batter in a pan and spread evenly", recipe:crepes)


baked_chicken_thigh = Recipe.create(name: "Baked Chicken Thighs", owner: user1)

   Recipeingredient.create(amount:"1 tbsp", ingredient:onion_powder, recipe:baked_chicken_thigh)
   Recipeingredient.create(amount:"1 tbsp", ingredient:garlic_powder, recipe:baked_chicken_thigh)
   Recipeingredient.create(amount:"1 tsp", ingredient:cayenne, recipe:baked_chicken_thigh)
   Recipeingredient.create(amount:"3 tbsp", ingredient:salt, recipe:baked_chicken_thigh)
   Recipeingredient.create(amount:"1 pack", ingredient:chicken_thigh, recipe:baked_chicken_thigh)

   Instruction.create(step:"Mix together spices and salt", recipe:baked_chicken_thigh)
   Instruction.create(step:"Sprinkle generously over chicken thights", recipe:baked_chicken_thigh)
   Instruction.create(step:"Bake for 40-45 minutes at 375F", recipe:baked_chicken_thigh)
   Instruction.create(step:"Let chicken rest for 5 minutes before eating", recipe:baked_chicken_thigh)

custard = Recipe.create(name: "Simple Custard", owner: user1)

  Recipeingredient.create(amount:"2 cups", ingredient:milk, recipe:custard)
  Recipeingredient.create(amount:"2 tbsp", ingredient:corn_starch, recipe:custard)
  Recipeingredient.create(amount:"1/3 cup", ingredient:sugar, recipe:custard)
  Recipeingredient.create(amount:"2", ingredient:eggs, recipe:custard)
  Recipeingredient.create(amount:"1 tsp", ingredient:vanilla_extract, recipe:custard)

  Instruction.create(step:"Combined milk, cornstarch, and sugar in a pot over medium heat", recipe:custard)
  Instruction.create(step:"When bubbles start forming use some of the liquid to temper the eggs", recipe:custard)
  Instruction.create(step:"Recombine everything in the pot", recipe:custard)
  Instruction.create(step:"Stir constantly until the mixture thickens", recipe:custard)
  Instruction.create(step:"Remove from the heat and stir in vanilla extract", recipe:custard)
  Instruction.create(step:"Cool for 30 minutes before placing the custard into the fridge", recipe:custard)


# meat loaf
# grilled cheese
# crepes

  # pizza dought
# Userlist.create(title:"heres a list", user: user1)
# Userlist.create(title:"another list", user: user1)
