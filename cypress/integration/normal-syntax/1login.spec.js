describe('Login Feature', () =>
{
    it('Success Login', ()=>
    {
        cy.visit('/')
        cy.get('.top-menu > [aria-haspopup="true"]').click();
    })
});