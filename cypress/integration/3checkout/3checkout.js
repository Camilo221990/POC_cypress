import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

/*Second Scenario*/
Given('El usuario debe iniciar sesion y verifica el listado de sus productos', () =>{
    cy.visit('/')
})

When('A user clicks on the login button', () =>{
    cy.get('.top-menu > [aria-haspopup="true"]').click()
})

And('A user clicks on the Ingresar', () =>{
    cy.get('#cdk-overlay-0').click()
})

And('A user enters the user {string} and password {string} and login', (user, password) => {
    cy.get('#mat-input-0').type(user)
    cy.get('#mat-input-1').type(password)
    cy.get('.text-center > .mat-elevation-z6').click()
})

And('A user clicks on the Accesorios', () =>{
    cy.get('[ng-reflect-router-link="/products,accesorios"]').click()
})

And('A user clicks on the Accesorio 1', () =>{
    cy.get('')
})

Then('Selecciona productos', () => {
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
})

