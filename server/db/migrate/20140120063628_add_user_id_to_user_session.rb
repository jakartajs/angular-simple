class AddUserIdToUserSession < ActiveRecord::Migration
  def change
    add_column :user_sessions, :user_id, :string  
  end
end
