Inputs:  
Location  
Process by date (and hour)  
Search start date (and time)  
Search end date (and time)  
kwh cost  
Submit  


Defaults:  
Times should default to midnight  
Variable for expected data results per hour (60)  


On-click:   
Date   
Reload page with existing values  
De-activate hour fields  
Set time to default  

Date/Hour  
Reload page with existing values  
Activate hour fields  


Submission:  
Pull location as variable  
Pull Start date as variable  
Pull End date as variable  
Pull kwh cost as variable  
(Sanity logic)  
Query database  
	Bank table for all BankIDs with given location variable  
	AnswersHourly table for WattsPerHour of all entries with (BankIDs matching the resulting list of BankIDs) and (AnswerDate between/equal to Start date and End date variable)  
	Count all WattsPerHour results  
Receive result as variable count  
	Sum all WattsPerHour results  
Receive result as variable total watts  
Calculate hour difference between start and end dates, set as total hours variable  
Multiply total hours variable against expected data results variable, set result as total expected data results variable  
Divide count over total expected data results, express as percentage, set as margin of error variable  
Multiply total watts by kwh cost, save result as total savings  
Output total savings  
Output margin of error  