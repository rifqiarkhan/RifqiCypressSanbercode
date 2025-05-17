
describe('Scenario Login', () => {
    
    // Valid Login
  it('1-login dengan benar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('action-summary')

    cy.get("button[type='submit']").should('be.visible')
    cy.get("button[type='submit']").click()

    cy.wait('@action-summary').its('response.statusCode').should('eq', 200);
    cy.url().should('include','/dashboard')
  })
});