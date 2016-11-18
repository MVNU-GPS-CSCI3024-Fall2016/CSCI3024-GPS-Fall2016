System Test Plan  

1. Introduction  
	1.1 Objectives  
	Objectives are standard testing objectives: to determine that the program works as expected, and to determine if it can be broken by user input.  
	1.2 Team Members  
	Jeremy Hendricks, Jeremy Myser, Wade Gooch, Nic Isley  
2. Scope  
Testing will take place per user story scenarios and on MySQL database for event handler success/failure conditions. Development team will perform developer testing individually, cross-testing each other's code, and exploratory testing to verify that each piece is still working after additions or updates.  
3. Assumptions/Risks  
	3.1 Assumptions  
	We assume that we will be able to deploy code on command to the test server to satisfy conditions of each determined test in the correct environment.  
	3.2 Risks  
	Primary risk is ensuring that we have time to execute all appropriate test cases on the intended final product. There is a secondary risk dealing with producing a satisfactory amount of correctly formatted data for testing the event we're using MySQL event scheduler.  
4. Test Approach  
Each input will be tested with the intention of ensuring that our program forces an error message with anything that is not in correct format. The database will be tested to assure that it is able to process data correctly if received in the existing format.  
	4.1 Test Automation  
	We plan to use Mocha to generate unit tests to test primarily for error results. We have determined that unit testing for things that actually contact the MySQL database is unlikely to be useful, so error testing is the only thing we will automate.  
5. Test Environment  
We are establishing a test environment on the MVNU CS server that is as close as we can get to Dr. Skon's live server so that we can test on a Linux server, but individual developer testing will take place on local environments.  
6. Milestones/Deliverables  
	6.1 Test Schedule  
	Individual developer tests will take place as code is written and put in place. Target is to have the code in place for full testing in the test environment by 12/6.  
	6.2 Deliverables  
	At this time we intend to produce unit tests with Mocha that will act as a testing deliverable.  
