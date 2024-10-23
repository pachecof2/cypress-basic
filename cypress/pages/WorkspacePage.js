Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
/// <reference types="cypress" />
import WorkspaceLocators from './locators/WorkspaceLocator.json'
class WorkspacePage{

    goToManageWorkspace = () => { 
        cy.get(WorkspaceLocators.menuWorkspace).click();
        cy.get(WorkspaceLocators.manageWorkspaceBtn).click();
    }
    createWorkspace(nombreBase) {
        const numeroAleatorio = Math.floor(Math.random() * 100);
        const nameRandom = `${nombreBase}${numeroAleatorio}`;
        cy.get(WorkspaceLocators.createWorkspaceBtn).click();
        cy.get(WorkspaceLocators.inputWorkspaceName).type(nameRandom);
        cy.get(WorkspaceLocators.createBtn).click();
        return nameRandom;      
}
    deleteWorkspace() { 
        cy.get(WorkspaceLocators.deleteBtn).eq(0).click();
        cy.wait(5000)
        cy.get(WorkspaceLocators.inputDeleteFrom).type("DELETE")
        cy.wait(5000)
        cy.get(WorkspaceLocators.deleteBtnConfirm).click()
        cy.wait(5000)

}
    editWorkspaceName(nombreNuevo) { 
    cy.get(WorkspaceLocators.settingsButton).click()
    cy.wait(500)
    cy.get(WorkspaceLocators.inputEditWorkspace).clear().type(nombreNuevo)
}
}   
export default new WorkspacePage(); 