class User < ActiveRecord::Base
	def self.get_user(username, password)
		user_row = User.find_by_username(username)
		if (user_row != nil and user_row.password == password)
			return user_row
		else 
			return nil
		end
	end
end
