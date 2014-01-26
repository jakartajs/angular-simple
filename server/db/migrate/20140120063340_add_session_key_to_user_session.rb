class AddSessionKeyToUserSession < ActiveRecord::Migration
  def change
    add_column :user_sessions, :key, :string
  end
end
