Feature: simple form
Scenario: Verifying all the fields whether taking input and submitting or not
Given Enter the Url 
When Firstname,Lastname,Email,Phone number,message
And Click on submit button
Then Successful message will appear