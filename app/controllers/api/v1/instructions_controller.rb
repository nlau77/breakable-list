class Api::V1::InstructionsController < ApiController
  skip_before_action :verify_authenticity_token

  def create
    body = request.body.read
    parsed_body = JSON.parse(body)
    recipe_id = parsed_body["recipeId"]
    instruction = parsed_body["instruction"]
    recipe=Recipe.find(recipe_id)

    newInstruction = Instruction.new(step: instruction, recipe:recipe)
    if newInstruction.save
      @instructions = recipe.instructions
      render json: @instructions
    else
      render json: {messages: newInstruction.errors.full_messages}
      # return some error
    end
      # binding.pry
  end
end
