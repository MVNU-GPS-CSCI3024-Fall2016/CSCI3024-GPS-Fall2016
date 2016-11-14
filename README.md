# CSCI3024-GPS-Fall2016

## Solar Data Savings

### Team Members
* Wade Gooch _Documentation Lead_
* Jeremy Hendricks _Communication Lead_
* Nic Isley _Project Lead_
* Jay Myser _Design Lead_

### Documentation
* Project Overview
* Requirements Specification
* Architecture
* Design
* Meeting Notes
* Testing
* System Documentation
* User Documentation

### External Resources
[Dr. Skon's Solar Live Data](http://jimskon.com/solar/Solar.html "Belize Solar Data Summary")

[Belize Energy Rates](http://www.bel.com.bz/Rate_Schedule.aspx "Belize Energy Rates")  

## Setting up the Development Environment  
This project is built using Node.js. Styling is done with Twitter Bootstrap, and the application
connects to a MySQL database.  

#### Setting up Node  
First, navigate to the [Node.js website](https://nodejs.org/en/) and download Node.js 6.9.1. This is the runtime used to develop
the application.  

#### Configuring the environment  
In the project, there is a build.config.js file. This file exports an object that contains server connection properties.  
**Setting up local database connection:**  If using a local MySQL server (i.e. via MySQL Workbench or XAMPP), open the file and 
change the properties for *database*, *username*, and *password* to match the intended local MySQL connection instance. The 
default port for a local MySQL instance is 3306, and the host should be localhost.  

#### Debugging with Visual Studio Code  
If using Visual Studio code when modifying the app source (recommended), a configuration will need to be set up 
to debug for the first time. Simply launch the debugger. This will prompt the user for a debug environment--select Node.js. 
Next, the editor will create a launch.json file in a new .vscode directory (which is in the .gitignore file). Change the *program* 
property to the following: `"program": "${workspaceRoot}/solar-data-savings/bin/www"`. Now the program can be debugged. When the
debugger is started, the debug console should display something a message: `Debugger listening on [::]:xxxxx`. The user can now 
open *http://localhost:3000* in the preferred browser.  

#### Setting up MySQL Server  
For local database development, use [MySQL Community Server](http://dev.mysql.com/downloads/mysql/).  

#### Recommended Toolset
* [Visual Studio Code](https://code.visualstudio.com/)
* [MySQL Workbench](http://www.mysql.com/products/workbench/)
