class Item < ApplicationRecord
    has_many :shoppers, through: :cart, dependent: :destroy
end
