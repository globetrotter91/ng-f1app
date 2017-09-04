# F1Seasons App
This app uses the http://ergast.com/mrd/ API to show the season list along with champions between 2005 to 2015.

Clicking on a season shows the list of all races with winners of the selected season.

The Champion is also highlighted where he is the winner of a race in the season.

# UI LIBRARY
https://bootswatch.com/yeti/
This is based on Bootstrap

# File Structure
    /app                            -- contains the angular app
        /components
            /season-list            -- contains the season-list component
        /services                   -- contains the service for calling API    
        /app.module.js              -- Here the app is initialized and begins
    /assets                         -- Folder for assets
        /css                        
    index.html                      


# Some notes
    1. Angular works brilliant when the application involves 2 way data binding. 
    2. We usually divide our code in components with each component having a controller and a view.
    3. Services are used to call the API or to run other common tasks.
    4. Directives can be used for displaying the list items in the season list.
    5. Using the this approach rather than $scope is a good practice as the dependency need not to be injected.


# Setup
You can directly run the index.html file on firefox.

Chrome and safari give an exception if the file request are made from cross origin without SSL.

Therefore To run on chrome. Folloe the following steps 

    1. Install NodeJS
    2. Open your favorite terminal emulator
    3. Install http-server by running: `npm install http-server -g`
    4. Start http-server by running: http-server 'path/to/your/angular/root/directory' -o