class RemoveIdFromShopper < ActiveRecord::Migration[6.0]
  def change
    remove_column :shoppers, :shopper_id
  end


end
