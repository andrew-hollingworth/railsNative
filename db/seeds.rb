# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.create(category: 'Shoes', title: 'Adidas Ultra Boost Uncaged', price: 180.00, description: 'It\'s a good shoe')
Item.create(category: 'Furniture', title: 'Just Black Office Chair', price: 60.00, description: 'It\'s a good chair')
Item.create(category: 'Electronic', title: 'Playstation 5', price: 1000.00, description: 'Not even out yet')
Item.create(category: 'Electronic', title: 'Iphone 12', price: 1200.00, description: 'This is the foldable iphone')