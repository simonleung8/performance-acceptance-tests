performance-acceptance-tests
============================

Current Sprint (Jan 17?):
With the next sprint itteration, we hope to have a very basic proof of concept project off the ground. Initially we will have two different apps
written in Node.js (ui) and GO (go_worker). The Node.js app will be the front end user interface. Through this interface, users should be able
to time simple actions such as login to cloud foundry givien user credentials, create and delete apps, list: apps, spaces and organizations. The
GO app will be the main worker providing the actual api calls for these user actions. Currently these two apps will work together through a redis
service.

UI App
=======






GO Worker APP
=============
