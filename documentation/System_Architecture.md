Version 1.0  

#Table of Contents

1. Introduction  

	1.1 Purpose  
	___________________
	
	1.2 Scope  
	___________________
	
	1.3 Definitions  
	___________________
	
	1.4 References  
	___________________
	
	1.5 Overview  
	___________________
	
2. Architectural Goals and Constraints  

	2.1 Technical Platform  
	The solar data project uses a database server running MySQL that is hosted on a Linux server running Node.js. The project will
	create a web application which will be added to an existing website.  
	
	2.2  
	The web application will engage in transactions with the Linux server.  
	
	2.3  
	Although no personal data is collected, measures will be taken to sanitize the data to prevent access to the database.  
	
	2.4  
	Persistence is not important for this project.  
	
	2.5
	Reliability and availability are the responsibility of the host website.  
	
	2.6  
	Data will be pre-cached in the database by a job server to improve accessibility.  
	
3. System Architecture View  

4. Data Model View  

5. Activity Diagram  

6. Pre-Cache Statechart

6. UI Mockup