import {Given, Then, When} from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from '@pages/LoginPage'
import HomePage from '@pages/HomePage'



Given('Me logueo como usuario correctamente', () => {
    cy.fixture('examples/LoginExample.json').then((json) => {
        cy.visit("/en/login");
        cy.get('.cl-create-account > .cl-d-block').click();
        //LoginPage.visitarPagina();
        LoginPage.doLogin(json);
       

    })
})

Given('Me logueo como admin correctamente', () => {
    cy.fixture('examples/LoginAdminExample.json').then((json) => {
        cy.visit("/en/login");
        cy.get('.cl-create-account > .cl-d-block').click();
        //LoginPage.visitarPagina();
        LoginPage.doLoginAdmin(json);

    })
})

Given('Navego al sitio App Clockify Me', () => {
    //LoginPage.visitarPagina();     
    cy.visit("/en/login");
    cy.get('.cl-create-account > .cl-d-block').click();
})

When('Me logueo como usuario con user {string} y pass {string}', (user,pass) => {
    LoginPage.doLoginScenarioOutline(user,pass);
})
When("Presiona el botón 'Log In'", () => {
    LoginPage.clickLogin();
});
Then('Valido saludo de bienvenida en el Título', () => {
    HomePage.verificarHome();     
})
When("Presiona el botón 'Log Out'", () => {
    LoginPage.logOut();
});
Then("El usuario está en la página de inicio de Clockify", function () {
     cy.url().should("contains", "en/login");
 });
Then("Se visualiza alerta {string} exitosamente", function (alert) {
    LoginPage.errorMessage('have.text', alert);
});
     