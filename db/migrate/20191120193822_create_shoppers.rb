class CreateShoppers < ActiveRecord::Migration[6.0]
  def change
    create_table :shoppers do |t|
      t.integer :shopper_id
      t.string :name
      t.string :address
      t.string :username
      t.string :password

      t.timestamps
    end
  end
end
