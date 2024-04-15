Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
/// <reference types="cypress" />
import HomeLocators from './locators/HomeLocators.json'

class HomePage{
    verificarHome = () => {
        cy.wait(2600);
        cy.get(HomeLocators.logoHome).should('be.visible');
        cy.get(HomeLocators.messageEntries).should('be.visible');
        cy.get(HomeLocators.messageHome).should('contain.text', 'Let’s start tracking!');
    }

}

export default new HomePage();