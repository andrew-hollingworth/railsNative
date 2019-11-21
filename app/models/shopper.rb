class Shopper < ApplicationRecord
    has_secure_password

    has_many :items, through: :cart

    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 6 }, on: :create
end
