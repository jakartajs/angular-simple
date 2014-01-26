angular-simple
==============

RESTful snippet list management feature in AngularJS and Ruby on Rails

Installation
------------

### Requirement
Before you can proceed, you need to install these components first:

1. [Nodejs](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) >= 0.10.15
2. [Ruby](https://www.ruby-lang.org/en/downloads/) >= 2.0
3. [Rails](http://railsapps.github.io/installing-rails.html) >= 4.0.0
4. [Yeoman](http://yeoman.io/) >= 1.0

### Cloning the repo
After you have succesfully installed all four of them, you can proceed by cloning the repository:
`git clone https://github.com/lolski/angular-simple.git`

### Installing dependencies
Install all the necessary dependencies:

1. `bundle install`
2. `rake db:migrate`
3. `npm install`

### Running
Finally, run the servers by:

1. `cd ./server`
2. `rails server`
3. `cd ./frontend`
4. `grunt server`