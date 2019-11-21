class RemoveIdFromItem < ActiveRecord::Migration[6.0]
  def change

    remove_column :items, :item_id
  end
end
