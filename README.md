TECHNICAL TEST: SPA 

This application is build on the MERN stack


Installation
1. Clone the repo to your local environment
2. cd to the BasiGo directory and run npm install to install the node packages for the server
3. Run the server ---nodemon server.js
4. cd into the client directory and run npm install to install react packages and dependancies
5. Run npm start to lauch the client
6. Mongo db runs on Atlas Mongodb cloud and is already configured on the .env file
7. Login to the application as an Sales Agent or Sales Manager using the credentials below
Sales Agent
Email:agent@test.com
Password: password

Sales Manager
Email: Manager@test.com
Password: password




Some Userful Endpoints

http://localhost:5000/user/login
http://localhost:5000/user/refresh_token
http://localhost:5000/user/logout
http://localhost:5000/api/leads----GET|POST----Fetch and Create Leads
http://localhost:5000/api/customers---GET|POST----Fetch and convert lead to customer
