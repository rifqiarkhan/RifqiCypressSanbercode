describe('Scenario Login', () => {
  //valid login
  it.only('ts001-success login', () => {
    cy.visit('https://example.cypress.iohttps://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('#user-name').clear().type('Admin');
    cy.get("//input[placeholder='Password']").type('admin123');
    cy.get(".button[type='login']").click()
  })
});