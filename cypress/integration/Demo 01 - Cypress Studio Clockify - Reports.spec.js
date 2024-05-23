/* ==== Test Created with Cypress Studio ==== */
it('Demo Cypress Studio - 01 - Reports', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://app.clockify.me/en/login');
  cy.get('.cl-create-account > .cl-d-block').click({force: true});
  cy.get('#email').type('yafin69474@adstam.com');
  cy.get('.cl-form-group__password-input > #password').type('Crowdar2024!');
  cy.get(':nth-child(2) > .cl-btn').click({force: true});
  
  cy.get('.cl-dropdown-menu > [href="/reports/summary"]').click({force: true});
  
  
  cy.get('.cl-dropdown-menu > [href="/reports/detailed?start=2024-05-20T00:00:00.000Z&end=2024-05-26T23:59:59.999Z"]').click({force: true});
  
  
  cy.get('.cl-dropdown-menu > [href="/reports/weekly?start=2024-05-20T00:00:00.000Z&end=2024-05-26T23:59:59.999Z"]').click({force: true});
  
  
  cy.get('.cl-dropdown-menu > [href="/reports/shared"]').click({force: true});
  
  
  cy.get('[href="/reports/team/attendance?start=2024-05-20T00:00:00.000Z&end=2024-05-26T23:59:59.999Z"]').click({force: true});
  
  
  cy.get('[href="/reports/team/assignments?start=2024-05-20T00:00:00.000Z&end=2024-05-26T23:59:59.999Z"]').click({force: true});
  
  
  cy.get(':nth-child(7) > .cl-dropdown-item').click({force: true});
  /* ==== End Cypress Studio ==== */
});