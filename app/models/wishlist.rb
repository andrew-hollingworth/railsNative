class Wishlist < ApplicationRecord
    belongs_to :shopper
    belongs_to :item
end
