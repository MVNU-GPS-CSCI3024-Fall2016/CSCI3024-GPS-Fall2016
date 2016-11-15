# Software Development Plan  

## 1. Plan Introduction and Overview.  
### 1.1 Purpose, Scope, and Objectives  
The purpose of this plan is to produce a step by step process to produce the product described in the [Software Architecture Document](./Software_Architecture_Document.md). 
The scope is limited as outlined in the Project Requirements Document. Objective is to successfully complete the deliverables on time.  

### 1.2 Assumptions and Constraints   
We assume that we will have access to a fully functional test environment as needed. We also assume that integration will be successful 
using tools we have previously cleared with the client. Primary constraint is access to a development server.  

## 2. Referenced documents.  
* [Software Architecture Document](./Software_Architecture_Document.md)  
* Project Requirements Document  

## 4. Identification of all software and software products to which the SDP applies  
* Node.js  
* Express  
* Twitter Bootstrap  
* Mocha  
* MySQL  

## 5. Definition of terms and acronyms.  
  
## 6. System Overview, including system and software architecture  
See the [Software Architecture Document](./Software_Architecture_Document.md)  

## 7. Overview of required work    
### 7.1 Requirements and constraints on the system and software to be developed  
**Requirements**  
* Pre-existing database server that is collecting data from the solar panels  
* Host web server adequate to run Node.js  
* Pre-existing website   

**Constraints:**  
* Do not user Ruby for server side logic  
* Do not use the Angular framework for the front end  

### 7.2 Software products and related deliverables  
* Functioning Node.js application  
* SQL scripts to expand and cache existing database  
* New web interface  

### 7.3 Requirements and constraints on project documentation  
Project Requirements Document, [Project User Story Document](./Solar_Data_Project_User_Story.md), 
[Software Architecture Document](./Software_Architecture_Document.md), this Software Development Plan, and a Software Test Plan.  
*Constraints:* Team and client approval as appropriate.  

### 7.4 Known software-specific risks  
None.  

## 8. Plans for performing general software development activities  
User story will be broken down into consumable work items. Work items will then be assigned to team members. 
Team members will update each other on progress via Google Hangouts calls and chat messages, comments, and documentation, with 
the intention of ensuring that alternate team members are aware of progress. When the program is running and database updates are in place, 
the Testing Plan will include scenario tests from user stories. The program will be considered deliverable when it successfully fulfills all scenario requirements.  

## 9. Supporting processes and information  
### 9.1 Software risk management  
[Risk Assessment](./Risk_Assessment.md) will be reviewed each week until project completion.  

### 9.2 Approach to requirements traceability  
The intention is for documentation to be adequate for someone unfamiliar with the original development 
project to maintain the code as necessary. Final System presentation and demo will be provided for client.  