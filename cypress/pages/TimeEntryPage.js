Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
});
/// <reference types="cypress" />
import EntryLocators from './locators/AgregarEntryLocators.json';

class TimeEntryPage {
  elements = {
    btnGoToShop : () => cy.get("#menu-item-40 > a"),
  };

  clickShop() {
    this.elements.btnGoToShop().click();
  }
  visitarTimeTracker = () =>{
    cy.visit("/en/login");
    cy.get('.cl-create-account > .cl-d-block').click();
  }
  
  doLoginScenarioOutline = (user,pass) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el escenario Outline, parametrizando así variables
    cy.get(EntryLocators.inpUsernameLogin).type(user);
    cy.get(EntryLocators.inpPassLogin).type(pass);
    cy.get(EntryLocators.btnIniciarSesionLogin).click();
  } 


  agregarProyectoNuevo01 = () => {
    cy.wait(800);
    cy.get(EntryLocators.btnAgregarProyectoNuevo).click();

    cy.get(EntryLocators.inpProyecto).click({force: true});

    // Ejemplo Input Simple
    // cy.get('[data-cy="project-name"]').type('Automation Cypress Project Demo');

    // Generar una cadena aleatoria de 4 caracteres
    const randomString = Math.random().toString(36).substring(2, 6);

    // Texto base
    const textoBase = 'Automation Cypress Project Demo';

    // Texto final con la cadena aleatoria
    const textoFinal = `${textoBase} ${randomString}`;

    // Introducir el texto final en el campo de entrada
    cy.get('[data-cy="project-name"]').type(textoFinal);
    
    cy.get('[data-cy="create-project"]').click();
    cy.get('.cl-d-lg-custom-none > .cl-dropdown > .pointer').click();
    cy.get('.cl-no-focus-tabindex > [data-cy="manual-mode"]').click();
    cy.get('.toast-title').should('be.visible');
    cy.get('.toast-title').should('contain.text', 'Project Automation Cypress Project Demo');
  }

  agregarProyectoNuevoTimeEntry01 = () => {
    cy.wait(800);
    // Generar una cadena aleatoria de 4 caracteres
    const randomStringTitulo = Math.random().toString(36).substring(2, 6);

    // Texto base
    const textoBase = ' Automation Cypress Demo :: Time Entry 01';

    // Texto final con la cadena aleatoria
    const textoFinal = `${textoBase} ${randomStringTitulo}`;


    cy.get('#undefined').type(textoFinal);
    //Ejemplo Input Simple
    // cy.get('#undefined').type(' Automation Cypress Demo :: Time Entry 01');
    
    cy.get('.cl-single-date-picker > :nth-child(1) > .cl-form-control').clear();
    cy.get('.cl-single-date-picker > :nth-child(1) > .cl-form-control').type('9');
    cy.get('.cl-single-date-picker > :nth-child(3) > .cl-form-control').clear();
    cy.get('.cl-single-date-picker > :nth-child(3) > .cl-form-control').type('12');
    cy.get('[data-cy="add-btn"] > :nth-child(2) > .cl-btn').click();
    cy.get('.cl-component-divided-left > .cl-d-flex > .cl-ml-2').click();
    cy.get('.cl-item-between > .cl-project-name').click();
  }

  agregarProyectoNuevoTimeEntry02 = () => {
    cy.get('#undefined').clear();
    cy.get('#undefined').type(' Automation Cypress Demo :: Time Entry 02');
    cy.get('.cl-d-lg-custom-none > .cl-dropdown > .pointer').click();
    cy.get('.cl-no-focus-tabindex > [data-cy="manual-mode"]').click();
    cy.get('[data-cy="add-btn"] > :nth-child(2) > .cl-btn').click();
    cy.get('.cl-component-divided-left > .cl-d-flex > .cl-ml-2').click();
    cy.get('.cl-item-between > .cl-project-name').click();
    cy.get('.cl-d-lg-custom-none > .cl-dropdown > .pointer > img').click();
    cy.get('.cl-no-focus-tabindex > [data-cy="manual-mode"]').click();
  }
  

  agregarProyectoNuevoTimeEntry03 = () => {    
    cy.get('#undefined').type(' Automation Cypress Demo :: Time Entry 03');
    cy.get('.cl-d-sm-inline-flex').click();
    cy.get('.cl-timetracker-entry-actions > .cl-w-100 > .cl-single-date-picker > :nth-child(3) > .cl-form-control').clear();
    cy.get('.cl-timetracker-entry-actions > .cl-w-100 > .cl-single-date-picker > :nth-child(3) > .cl-form-control').type('17');
    cy.get('[data-cy="add-btn"] > :nth-child(2) > .cl-btn').click();
    cy.wait(1200);

  }

  eliminaProyectosGenerados = () => {
    cy.get('#bulkEdit > img').click();
    cy.wait(1200);
    cy.get('[data-testid="toggle-select-all"] > .cl-custom-checkbox');
    cy.wait(1200);

    // Obtener la fecha actual
    const fechaActual = new Date();

    // Obtener el mes y el día
    const mes = fechaActual.getMonth() + 1; // Los meses comienzan desde 0
    const día = fechaActual.getDate();
    
    // Formatear la fecha en el formato necesario
    const fechaFormateada = `024-${mes.toString().padStart(2, '0')}-${día.toString().padStart(2, '0')}`;

    // Construir el selector utilizando la fecha formateada
    const selector = `#\\32 ${fechaFormateada}`;

    // Usar el selector construido con la fecha actual
    cy.get(selector).check();
    
    //Ejemplo de locator a construir 
    //cy.get('#\\32 024-05-06').check();
    
    cy.get(':nth-child(4) > .cl-color-blue').click();
    cy.get('[data-cy="confirm-delete"]').clear();
    cy.get('[data-cy="confirm-delete"]').type('DELETE');
    cy.get('app-button.ng-star-inserted > .cl-btn').click();
    
    cy.get('#cdk-drop-list-2 > :nth-child(1) > .cl-dropdown > .cl-nav-link > .cl-d-flex > .cl-nav-link-copy').click();
    cy.get('.cl-p-lg-2 > .cl-d-flex > .cl-ml-auto > .cl-badge > select-arrow > .ng-star-inserted').click();
    
    cy.get('.cl-px-1').click();
    cy.get('[data-cy="archive-project"]').click({force: true});
    cy.get('app-button.ng-star-inserted > .cl-btn').click();
    cy.wait(2600);
    cy.get('.cl-p-lg-2 > .cl-d-flex > .cl-ml-auto > .cl-badge > select-arrow').click();
    
    cy.get('.cl-px-1').click();
    cy.get('[data-cy="delete-project"]').click({force: true});
    cy.get('app-button.ng-star-inserted > .cl-btn').click();
  }

  logOut = () => {
    cy.get('#topbar-menu').click();
    cy.get('.cl-no-image-wrapper-sm > span').click();
    cy.get('[data-cy="logout"]').click();
  }
  }

export default new TimeEntryPage();
