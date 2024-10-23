Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
/// <reference types="cypress" />
import ProjectsLocators from './locators/ProjectsLocators.json'
class ProjectPage{
    createNewProject = (nombreBase) => { 
        const numeroAleatorio = Math.floor(Math.random() * 100);
        const nameRandom = `${nombreBase}${numeroAleatorio}`;
        cy.get(ProjectsLocators.menuProject).click()
        cy.get(ProjectsLocators.newProjectBtn).click()
        cy.get(ProjectsLocators.inputProject).type(nameRandom)
        cy.get(ProjectsLocators.createBtn).click()
        cy.wait(5000)
        return nameRandom;    
    }
}
export default new ProjectPage(); 