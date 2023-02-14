import { Given, Then, When, And } from "cypress-cucumber-preprocessor/steps";

/*Second Scenario*/
Given('El usuario debe iniciar sesión', () =>{
    cy.visit('/')
})

When('A user clicks on the login button', () =>{
    cy.get('.top-menu > [aria-haspopup="true"]').click()
})

And('A user clicks on the Ingresar', () =>{
    cy.get('#cdk-overlay-0').click()
})

And('A user enters the user {string}', (user)=>{
    cy.get('#mat-input-0').type(user)
})

And('A registrar password {string}', (password)=>{
    cy.get('#mat-input-1').type(password)
})

Then('A user clicks on the Registrar usuario', () =>{
    cy.get('.text-center > .mat-elevation-z6').click()
})

And('A user clicks on the login button', () =>{
    cy.get('.top-menu > [aria-haspopup="true"]').click()
})

/*And('A user enters the username {string} and password {string} and login', (username, password) => {
    cy.get('#mat-input-2').type(user)
    cy.get('#mat-input-3').type(password)
    cy.get('.mat-elevation-z6').click()
})

And('A user clicks on the {string} button', (id_button) =>{
    cy.get(`#${id_button}`).click()
})

And('Revisa el carrito', () => {
    cy.get('#shopping_cart_container').click()
})

Then('Revisa el carrito', () => {
    cy.get('#shopping_cart_container').click()
})

And('Logout', () => {
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
})*/