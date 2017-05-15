Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root("static_pages#index")

  namespace :api do
    namespace :v1 do
      resources :user_recipes, only: [:index, :show, :new, :create, :update, :destroy]
      resources :user_lists, only: [:index, :show, :new, :create, :update, :destroy]
      resources :ingredients, only: [:create, :update, :delete]
      resources :instructions, only: [:create, :update, :delete]
    end
  end

    get '*path', to: 'static_pages#index'
end
