Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :groceries
  root("static_pages#index")

  resources :users, only: [:show]

  resources :users do
    resources :recipes
  end

  resources :recipes

  namespace :api do
    namespace :v1 do
      resources :user_recipes, only: [:index, :show, :new, :create]
    end
  end

end
