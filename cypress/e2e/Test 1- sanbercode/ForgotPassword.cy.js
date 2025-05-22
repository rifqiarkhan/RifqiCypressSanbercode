describe('Forgot password', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//forgot password 
  it('Berhasil forgot password', () => {
    cy.contains('Forgot your password?').click();
    cy.url().should('include', '/requestPasswordResetCode');
    cy.get("input[placeholder='Username']").type('Admin');
    cy.get("button[type='submit']").click();
    cy.contains('Reset Password link sent successfully').should('be.visible');
  });
});

//forgot password kosongkan username 
it.only('forgot password kosongkan username', () => {
    cy.contains('Forgot your password?').click();
    cy.url().should('include', '/requestPasswordResetCode');
    cy.get("input[placeholder='Username']")
    cy.get("button[type='submit']").should('be.visible')
    cy.get("button[type='submit']").click();
    cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contains.text','Required')
  
});

//intercept forgot password 
  it('should send password reset link', () => {
    cy.contains('Forgot your password?').click();
    cy.url().should('include', '/requestPasswordResetCode');
    cy.get("input[placeholder='Username']").type('Admin');

    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestResetPassword').as('resetPassword');

    cy.get("button[type='submit']").click();
    cy.wait('@resetPassword').its('response.statusCode').should('eq', 302);
    cy.contains('Reset Password link sent successfully').should('be.visible');
  });
});
