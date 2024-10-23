Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
});
/// <reference types="cypress" />
import LoginLocators from './locators/LoginLocators.json'

class LoginPage{

    visitarPagina = () => { 
        cy.visit('/en/login');
        cy.get('.cl-create-account > .cl-d-block').click();
    };

    doLoginAdmin = (json) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el archivo "LoginAdminExample.json"
    cy.get(LoginLocators.inpUsernameLogin).type(json.username);
    cy.get(LoginLocators.inpPassLogin).type(json.pass);
    cy.get(LoginLocators.btnIniciarSesionLogin).click();
};
    doLogin = (json) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el archivo "LoginExample.json"
    cy.get(LoginLocators.inpUsernameLogin).type(json.username);
    cy.get(LoginLocators.inpPassLogin).type(json.pass);
    cy.get(LoginLocators.btnIniciarSesionLogin).click();
};
    doLoginScenarioOutline = (user,pass) => { //realiza el login en la aplicacion de acuerdo a los datos cargados en el escenario Outline, parametrizando así variables
    cy.get(LoginLocators.inpUsernameLogin).type(user);
    cy.get(LoginLocators.inpPassLogin).type(pass);
};
clickLogin() {
    cy.get(LoginLocators.btnIniciarSesionLogin).click();
};
logOut(){
    cy.get(LoginLocators.profileMenu).click();
    cy.get(LoginLocators.logOutBtn).click();
};
errorMessage() {
    cy.get(LoginLocators.errorMessage);
}
}
export default new LoginPage(); 
