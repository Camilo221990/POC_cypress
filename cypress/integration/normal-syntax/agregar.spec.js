describe('agregar Feature', () =>
{
    

    it('Agregar page', ()=>
    {

        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.url().should('contains','/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.url().should('contains','/inventory.html')
    })


});