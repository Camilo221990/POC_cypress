import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";


/* Primer Scenario*/
Given('A user enters to the login page', ()=>{
    cy.visit('/')
})

When('A user clicks on the login button', () =>{
    cy.get('.top-menu > [aria-haspopup="true"]').click()
})

And('A user clicks on the Ingresar', () =>{
    cy.get('#cdk-overlay-0').click()
})

And('A user clicks on the Regitrar', ()=>{
    cy.get('.mat-dialog-actions > :nth-child(2)').click() 
})

And('A user enters the user {string}', (user)=>{
    cy.get('#mat-input-2').type(user)
})

And('A registrar document {string}', (document)=>{
    cy.get('#mat-input-6').type(document)
})

And('A registrar password {string}', (password)=>{
    cy.get('#mat-input-3').type(password)
})

And('A registrar firtsName {string}', (firtsName)=>{
    cy.get('#mat-input-4').type(firtsName)
})

And('A registrar lastName {string}', (lastName)=>{
    cy.get('#mat-input-5').type(lastName)
})

Then('A user clicks on the Registrar usuario', () =>{
    cy.get('.text-center > .mat-elevation-z4').click()
})

/*Scenario Logeo 



And('Logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})*/
