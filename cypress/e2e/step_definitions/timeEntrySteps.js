import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"
import TimeEntryPage from '@pages/TimeEntryPage'

Given("Me logueo como usuario correctamente - usuario normal", () => {
    cy.viewport(1024, 768) // Calibramos viewport con resolucion de pantalla 1920px x 1080px
    cy.visit("/en/login");
    cy.get('.cl-create-account > .cl-d-block').click();
  });

When('Ingreso user {string} y pass {string}', (user,pass) => {
    TimeEntryPage.doLoginScenarioOutline(user,pass);
  });  

When('Agrego Proyecto Nuevo', () => {
     TimeEntryPage.agregarProyectoNuevo01();
});

When('Agrego task 01', () => {
  TimeEntryPage.agregarProyectoNuevoTimeEntry01();
});

When('Agrego task 02', () => {
  TimeEntryPage.agregarProyectoNuevoTimeEntry02();
});

When('Agrego task 03', () => {
  TimeEntryPage.agregarProyectoNuevoTimeEntry03();
});

When('Elimino Proyectos generados', () => {
  TimeEntryPage.eliminaProyectosGenerados();
});

Then('Cierro sesion exitosamente', () => {
  TimeEntryPage.logOut();
});
