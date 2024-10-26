import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
Given('Enter the Url', () => {
  cy.visit('https://v1.training-support.net/selenium/simple-form');
});
When('Firstname,Lastname,Email,Phone number,message', () => {
  cy.get('#firstName').type('Navya'); // Use realistic test data
  cy.get('#lastName').type('Garikina'); // Use realistic test data
  cy.get('#email').type('garikinanavya10@gmail.com'); // Use realistic test data
  cy.get('#number').type('1234567890'); // Use realistic test data
});
And('Click on submit button', () => {
  cy.get('input[type="submit"]').click(); // No need for xpath
});
Then('Successful message will appear', () => {
  // Add the assertion for the alert
  cy.on('window:alert', (text) => {
    expect(text).to.contains('Thank you for your submission'); // Adjust the message as needed
  });
});