# Assignment Done!
Make sure the nodejs express server is running and that it is connected to a mongodb database.
To run the server open the terminal in the dev-test-server directory and run **npm install** and then **npm start**.

The mongodb instance should be running on port **27017**, you can run the docker image I used which can be found [here](https://hub.docker.com/repository/docker/manuelmolinaf/dev-test-mongo/general).
Alternatively you can use your own mongodb instance.The mongdb connection string can be found in the **.env** file at the root of the dev-test-server directory.



# devTest
We want to understand better how good you are integrating several technologies to provide a solid solution, this is a sample project that will help ilustrate just that.

**Exchange rate per symbol**

We would like to generate a site that provides exchange information and general information of the sample platform selected to the end users.

1. Fork this project and invite me (starl1n), you are going to work on the branch you just created and submit your changes there.
2. Create a connection to these endpoints using the required technology:

**Socket endpoint:** 
wss://ws.bitmex.com/realtime?subscribe=instrument,orderBookL2_25:XBTUSD

For reference: https://www.bitmex.com/app/wsAPI

**WEB API:**
https://www.bitmex.com/api/explorer/#!/Announcement/Announcement_get

3. Present the data in a human readable fashion (ReactJS/Blazor/Etc)
4. Store the records received from the connection into a database SQL Server/MariaDB/MongoDB/Postgres/
5. In a separated section of the solution provide a way to search or filter for the results stored in the Database of choice sorted by date in decending order, maybe you can add any sort of filter here too.


**This test will evaluate:**
1. Web Socket/API consumption capabilities
2. Knowledge of API integration between databases/API
3. Also will show capabilities of handling the frontend technologies
4. Familiarity with the language


If you are unfamiliar with any part of the request, is fine, you can skip it **(but make a comment )**
