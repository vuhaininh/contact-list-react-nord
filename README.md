# Installation Guide

## Install NPM
```
http://blog.teamtreehouse.com/install-node-js-npm-windows
```
## Get the code
Open command promp and run command line
```
git clone git@github.com:vuhaininh/contact-list-react-nord.git
```
## Run the app in local
Go to the app folder
```
 cd contact-list-react-nord
 ```
Install package dependencies
```
 npm install
 ```
Start development server
```
npm start
```
 Open http://localhost:3000 to view it in the browser.

## Deploy to Heroku
```
git init
heroku create -b https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "deploy on Heroku"
git push heroku master
heroku open
```
## Production
Open https://salty-mountain-32286.herokuapp.com/ to view the app in production
