![Build Status](https://codeship.com/projects/3695ed20-10d5-0135-5e9d-5a1a2d987964/status?branch=master)
![Code Climate](https://codeclimate.com/github/nlau77/breakable-list.png)
![Coverage Status](https://coveralls.io/repos/nlau77/breakable-list/badge.png)

# README


#About Grocery Picker
Grocery picker is an app built to help make cooking a little easier. Users can build
a list of custom recipes. Users can then build a quick grocery list based off the recipes
that they plan to prepare. The app is built to be mobile friendly so that it can be useful
at the grocery store.  Users can check off items as they grab them with a simple
tap.

#Try out the app on heroku
https://grocery-picker.herokuapp.com/
Feel free to log in with `user@test.com/123456` to test out the site.

#To set up the app on your machine

After downloading this app run in the terminal `bundle install`
and then `npm install`.  

Then run the following:
  `rake db:create
  rake db:migrate
  rake db:seed`

This app requires running two terminals to work.
Run `rails s` in one terminal and `npm start` in the other

Visit localhost:3000 to view the site.
