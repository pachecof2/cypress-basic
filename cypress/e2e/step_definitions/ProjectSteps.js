import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"
import ProjectPage from "@pages/ProjectPage";

When("el usuario accede a la sección 'New Project' y crea un nuevo Projecto con el nombre {string}", (nombreBase) => {
    const generatedName = ProjectPage.createNewProject(nombreBase);
    cy.wrap(generatedName).as('projectName'); // Almacena el nombre generado
});
Then("se crea exitosamente el nuevo Project con el nombre {string}", () => {
    cy.get('@projectName').then((projectName) => {
        // Verifica que el proyecto se creó exitosamente
        cy.contains(projectName).should('exist');
        cy.wait(5000)
 });
});