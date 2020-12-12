# Service Status Checker
Project to check the status of my services

# Server 
The server runs an express server which run a scheduled Cron Job at 9:00 am IST which checks if all my other websites and servers are up and running or not. If any of them are down, a notification will be sent to any of my devices which are subscribed to the Web-Push notification. The server accepts health check requests whose responses are sent to the client.

# Client
The client shows the status of all my servers and sites. The client is a Progressive web app made using React. 


