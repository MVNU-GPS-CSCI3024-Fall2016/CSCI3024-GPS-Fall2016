# Solar Data Project User Story

### Story  
As a user on the Solar Data website  
I want the ability to search solar data at a facility of choice over a specified time period with a provided energy rate  
So that I may see the dollar value of the savings from using the energy panels  

### Acceptance Criteria
* Allow the user to provide a date and/or time range, energy price rate, and select a facility
    * Start dates should not be selectable if it is before the initial data collection date
    * Future dates should not be selectable
* Output cost savings generated for the selected location during the specified time frame
* Break down cost savings by solar panel bank for location
* Output margin of error if there is missing data for the specified time frame

### Non-Functional Requirements
* Data should be available up to yesterday
* Data needs to be added for Latitude and Longitude of each location
* Hourly data needs to be pre-cached on the server with a daily job

### Scenarios
**Scenario: Valid savings search**  
Given that I am a user on the website  
And I select a time frame of [hour | day | month | year]  
And I enter the start date and end date  
And I select a location  
And I provide the energy rate for that location  
When I click submit  
Then I will see the savings for the selected location during the time frame specified with margin of error  

**Scenario: Attempt to search without dates**  
Given that I am a user on the website  
And I do not provide a [start date | end date]  
When I click submit  
Then an error message will display saying "Please provide [start date | end date]"  

**Scenario: Attempt to search with end date preceeding start date**  
Given that I am a user on the website  
And I enter a start date  
And I enter an end date that is before the start date  
When I click submit  
Then an error message will display saying "Please enter a valid date range"  

**Scenario: Attempt to search with end date after current date**  
Given that I am a user on the website  
And I enter a start date  
And I enter an end date that is after the current date  
When I click submit  
Then an error message will display saying "Please enter an end date no later than yesterday"  

**Scenario: Attempt to search without energy rate**  
Given that I am a user on the website  
And I do not provide an energy rate charge  
When I click submit  
Then an error message will display saying "Please provide the rate the energy company charges"  

**Scenario: Attempt to search with invalid energy rate**  
Given that I am a user on the website  
And I provide an energy rate charge which is anything but a positive monetary value  
When I click submit  
Then an error message will display saying "Please provide a valid energy rate"  

**Scenario: Attempt to search for data before data for the site was collected**  
Given that I am a user on the website  
And I search for a start date that is before data collection began for my target site  
When I click submit  
Then an error message appears saying "There is no data for this location until [first date of data collected]"  

**Scenario: Attempt to search a time period where no data was successfully collected**  
Given that I am a user on the website  
And I select a time frame of [hour | day | month | year]  
And I enter the start date and end date  
And I select a location  
And I provide the energy rate for that location  
And there was no data collected for my specified time frame and location  
When I click submit  
Then an error message will display saying "No data was logged for that site during that time frame"  

**Scenario: Attempt to search a time period with no location selected**  
Given that I am a user on the website  
And I do not select a location  
When I click submit  
Then an error message will display saying "Please select a location"  
