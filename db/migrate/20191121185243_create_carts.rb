class CreateCarts < ActiveRecord::Migration[6.0]
  def change
    create_table :carts do |t|
      t.integer :shopper_id
      t.integer :item_id
      t.integer :quantity

      t.timestamps
    end
  end
end
