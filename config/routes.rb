Rails.application.routes.draw do
  resources :wishlists
  resources :items
  resources :shoppers
  resources :shoppers do 
    resources :items
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  post '/auth/login/shoppers', to: 'shoppers#login'
  get '/auth/verify/shoppers', to: 'shoppers#verify' 

end
