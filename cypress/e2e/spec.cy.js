describe('Test Cyber Books Store App', () => {

    it('successfully loads', () => {
        cy.intercept('**').as('books');

        cy.visit('https://roibaza.github.io/cyber-book-store/')

        cy.get('@books.all').should('have.length', 2);
    });

    it("Check All Books Are Mounted", () => {
        cy.get('.container', {timeout: 6000}).should('have.length', "10");

        cy.get('.MuiSelect-select').should('contain', "10");
    });

    it("Test Input", () => {
        cy.get('.input').should('have.value', "cyber");
    });

    it("Test Page Size Select", () => {
        cy.get('.MuiInputBase-root').click()
        //
        cy.get('.MuiButtonBase-root').first().next().next().click();

        cy.get('.container', {timeout: 6000}).should('have.length', "25");
    });

    it("Test Cart Logo", () => {
        cy.get('.add-to-cart', {timeout: 6000}).first().click({force:true});

        cy.get('.cart-total-items').should('contain', "1");
    });

    it("Test Cart", () => {
        cy.get('.cart-icon').click();

        cy.get('.cart-item').should('have.length', 1);
    });

    it("Test Clear All Items From Cart", () => {
        cy.get('.clear-all').click();

        cy.get('.cart-total-items').should('contain', "0");

        cy.get('.empty-cart').should('contain', "Your Cart is empty");

        cy.get('.exit').click();
    });
})