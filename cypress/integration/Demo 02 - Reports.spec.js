describe('Prueba de funcionamiento correcto de los botones de un desplegable', () => {

  before(() => {
    // Iniciar sesión antes de todas las pruebas
    cy.visit('https://app.clockify.me/en/login')
    cy.get('.cl-create-account > .cl-d-block').click({force: true})
    cy.get('#email').type('yafin69474@adstam.com')
    cy.get('.cl-form-group__password-input > #password').type('Crowdar2024!')
    cy.get(':nth-child(2) > .cl-btn').click({force: true})
    cy.wait(3600)
    cy.url().should('include', '/tracker')
  })

  beforeEach(() => {
    // Visitar la página del tracker antes de cada prueba
    cy.visit('https://app.clockify.me/tracker')
    cy.wait(1200)
    // Asegurarse de que el menú desplegable esté presente
    cy.get('.cl-nav-item > .cl-d-none').should('be.visible')
  })

  it('Verificar que se puede acceder a todos los apartados del menú Reports', () => {
    const reportLinks = [
      {selector: '.cl-dropdown-menu > [href="/reports/summary"]', urlPart: '/reports/summary'},
      {selector: '.cl-dropdown-menu > [href="/reports/detailed?start=2024-05-20T00:00:00.000Z&end=2024-05-26T23:59:59.999Z"]', urlPart: '/reports/detailed'},
      {selector: '.cl-dropdown-menu > [href="/reports/weekly?start=2024-05-20T00:00:00.000Z&end=2024-05-26T23:59:59.999Z"]', urlPart: '/reports/weekly'},
      {selector: '.cl-dropdown-menu > [href="/reports/shared"]', urlPart: '/reports/shared'},
      {selector: '[href="/reports/team/attendance?start=2024-05-20T00:00:00.000Z&end=2024-05-26T23:59:59.999Z"]', urlPart: '/reports/team/attendance'},
      {selector: '[href="/reports/team/assignments?start=2024-05-20T00:00:00.000Z&end=2024-05-26T23:59:59.999Z"]', urlPart: '/reports/team/assignments'},
      // {selector: ':nth-child(7) > .cl-dropdown-item', urlPart: '/reports/custom'}
    ]

    cy.wrap(reportLinks).each((link) => {
      // Hacer hover sobre el botón de Reports
      cy.get('.cl-nav-item > .cl-d-none').click({force: true})
      cy.get(link.selector).click({force: true})
      cy.url().should('include', link.urlPart)
      cy.go('back')
    })
  })

  after(() => {
    // Cerrar sesión después de las pruebas
    cy.get('.cl-no-image-wrapper-sm').click({force: true})
    cy.get('[data-cy="logout"] > .cl-ml-2').click({force: true})
    cy.url().should('include', '/en/login')
  })

})
