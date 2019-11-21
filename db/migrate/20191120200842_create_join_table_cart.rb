class CreateJoinTableCart < ActiveRecord::Migration[6.0]
  def change
    create_join_table :shoppers, :items do |t|
      t.index [:shopper_id, :item_id]
      t.integer :quantity
      # t.index [:item_id, :shopper_id]
    end
  end
end
