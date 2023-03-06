# About
The goal of this application was to experiment with frontend design. Therefore I developed this application in JavaScript (VSCode), using React.js, to access the nice recipes that my wife usually makes. React was chosen because of smooth instantaneous interactions and not wasting time waiting, while your pots are on the stove. The high-level goal of this app is to perhaps run on an ipad or such that one could put up in the kitchen and be able to quickly look up recipes while cooking. Although this is a very basic first draft, I could see this app significantly expand and become a useful kitchen tool that could be run on a touchscreen device and hung on the wall to supplant or supplement a cookbook that typically gets in the way and takes up counter space.

# Requirements
- React.js

# Design principles
I decided on a neutral color scheme (different shades of blue) and tried to make buttons big and clear. Sections are marked differently to visually convey the significance of information (e.g. ingredients are slightly less eye-catching since they are not immediately important at the 'select a recipe'-stage of the app). I also tried to make the recipes uniform with text, aligned in a systematic manner, using flex and grid displays throughout to achieve uniformity.

Currently recipe data is constructed as an array of JSON objects that is being passed into the constructor of the FilteredList component. This component builds the basic HTML layout (in the Render function) and passes the recipe objects onto a List component, which for each recipe in the array constructs and returns an HTML 'tile' with its own functionality to the FilteredList. The FilteredList is configured in such a way that it responds to user input through the input field and the dropdown boxes. Most of this is done in the filterItem function that reads variables stored in the FilteredList's state and modifies them accordingly to update the FilteredList object and reflect the user's choices. The input box updates the searchRecipe variable in the FilteredList state and triggers an update whereby the filterItem function is called to update the FilteredList; the same is true for the typeHandler and the servingsHandler. The sortHandler function orders the names of the recipe in a logical list and then reorders the DOM based on the order in the logical list; the unsort function uses the original list of constructed recipe objects to restore the app to its default state.

# How to start
First, run 'npm install' in the backend folder and in the root folder to install all dependencies. Then, you will need three terminals.
1) Start your MongoDB instance in a new terminal. On Windows 11 64-bit move into the database folder of this application and type 'mongod --dbpath ./ --port 27017'.
2) In a second terminal, move into the backend folder and run 'npm start' (if this is how you have configured your setup) or 'node server.js' or 'nodemon server.js'. A message should be displayed in your terminal that Node successfully established a connection to your MongoDB database instance.
3) In a third terminal, move into your root folder and type 'npm start' to start the React Development server.
4) The React application should be accessible at http://localhost:3000. The database API is exposed at http://localhost:4000 and will return 404 on incorrect paths.

Once running, your computer should automatically open up a new browser window. The development server is reachable at 'localhost:3000'.

**NOTE: This application was developed in VSCode on a Windows 11 machine and tested in Google Chrome.**

# To-do
## Database integration
This program currently only contains twelve recipes, which are hardcoded in App.js and constructed into an array of JSON objects upon loading the program. Recipes are thus not stored in a separate database. Moreover, the app is currently limited to functionality provided through the React Development Server. Future iterations of this project could incorporate Node.js as runtime environment, which would make database functionalities easier as well as including Express and for example Passport for authentication and create user profiles.
1) Redevelop to integrate Node.js and React
2) Pick database option (SQL vs. NoSQL)
3) Move recipes from hardcoded in App.js to database
4) Set up database connection
5) Set up data retrieval route (retrieve first twenty recipes upon app load)
6) Set up data search route
7) Set up new recipe route
8) Set up modify recipe route

# Disclaimer
**This app was originally developed in 2018, but I recently began redevelopment in React.js, incorporating Node.js with Express and Mongoose for MongoDB interaction, which is ongoing work.**