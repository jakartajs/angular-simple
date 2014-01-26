# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
Server::Application.config.secret_key_base = 'f928b87f95e9bc65d077ef2fbf1a223f8238411e00e2b208f6f9f2912fbf4ab46dc9641d3ee3d21cb475456ae917414a5edb3cb491d8ff0c68997f336b313f82'
