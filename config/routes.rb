Rails.application.routes.draw do

  root("tasks#index")

  resource :session, only: [:new, :create, :destroy]

  resources :users, only: [:new, :create]

  resources :tasks, only: [:index, :create, :update, :destroy]

end
