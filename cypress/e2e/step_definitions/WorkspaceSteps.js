import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"
import WorkspacePage from "@pages/WorkspacePage";

When("el usuario accede a la sección 'Manage workspaces' para crear un nuevo Workspace", () => {
    WorkspacePage.goToManageWorkspace();
});
When("ingresa {string} en el campo 'Workspace name' y hace clic en el botón 'Create'", (nombreBase) => {
    const generatedName = WorkspacePage.createWorkspace(nombreBase);
    cy.wrap(generatedName).as('workspaceName'); // Almacena el nombre generado
});
Then("se crea exitosamente el nuevo workspace con el nombre {string}", () => {
    cy.get('@workspaceName').then((workspaceName) => {
        // Verifica que el workspace se creó exitosamente
        cy.contains(workspaceName).should('exist');
        cy.wait(5000)
        WorkspacePage.deleteWorkspace();
 });
});
When("accedo a la sección 'Manage workspaces' y edito un Workspace con el nombre {string}", (nombreNuevo) => {
    // Acceder a la sección de "Manage workspaces"
    WorkspacePage.goToManageWorkspace();
    WorkspacePage.editWorkspaceName(nombreNuevo);

});
Then("actualiza exitosamente el nombre del workspace {string}", (nombreNuevo) => {
    cy.wait(500)
    cy.get("[data-cy='workspace-name']").should('have.value',nombreNuevo )
});
