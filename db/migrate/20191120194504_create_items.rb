class CreateItems < ActiveRecord::Migration[6.0]
  def change
    create_table :items do |t|
      t.integer :item_id
      t.string :category
      t.string :title
      t.decimal :price
      t.string :description

      t.timestamps
    end
  end
end
