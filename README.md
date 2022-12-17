# SPORTIFY - A School Sport Events Management System
This is a full stack application, built using Angular, Node.js, Express.js and MongoDB. It has three end users:
1. Administrator/Organiser: The organiser is responsible for organising sports events. He/She can add events, and can see house-wise participants with their
                            respective events.
2. House Captains: There are house captains for each house: Red, Green, Blue and Yellow. Each house captain can see the students registered for events from
                   his/her respective house. The house captain has the privilege of removing a student from an event, as students can register for multiple
                   events.
3. Students: The students can register themselves onto the app with their respective houses, and can register for available events. The student can also
             withdraw from an event as per needs, and cannot register for the same event twice.
             
The application uses JWT (JSON Web Tokens) for authentication, and also has route guards in place to ensure that unauthorized access to certain pages is avoided.
The credentials for house captains are assumed to be given to them by the organisers. 

# Steps to run the application
1. Download or clone the application.
2. Navigate to the Sportifybackend folder, run "npm install" to install node modules and run "node index.js" command to run the backend.
3. Navigate to the SportifyFrontend folder, run "npm install" to install node modules and run "ng serve" command to serve the frontend.
4. "localhost:4200" will run the project on the browser.

The demo to the application is given below:



https://user-images.githubusercontent.com/76245460/208238393-66ecff10-0fcf-4a66-b54f-bce8e68b12eb.mp4

