class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :shoppers, :password, :password_digest
  end
end
