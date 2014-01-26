class UserSession < ActiveRecord::Base
	def self.login(user)
		session = UserSession.new
		session.user_id = user.id
		session.key = loop do
      t = SecureRandom.hex(16)
      break t unless UserSession.exists?(key: t)
    end
    session.save!
    return session
	end
end
