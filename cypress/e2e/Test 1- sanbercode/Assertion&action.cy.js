describe('Scenario Login', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });
    // Valid Login
  it('1-login dengan benar', () => {
    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('admin123')
    cy.get("button[type='submit']").should('be.visible')
    cy.get("button[type='submit']").click()
    cy.url().should('include','/dashboard')
  })
});
  //Login with Invalid Password
  it.only('2-login dengan salah Password', () => {
    cy.get("input[name='username']").type('Admin');
    cy.get("input[name='password']").type('admin111');
    cy.get("button[type='submit']").should('be.visible');
    cy.get("button[type='submit']").click()
    cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain.text','Invalid credentials')
  
});

 //Login with Invalid Username
it.only('3-login dengan salah username', () => {
    cy.get("input[name='username']").clear().type('Arjuna12!')
    cy.get("input[name='password']").clear().type('admin123')
    cy.get("button[type='submit']").click()
    cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contains.text','Invalid credentials')

});
 //Login with Invalid Username and Password
it('4-login dengan salah UsernamePassword', () => {
    cy.get("input[name='username']").clear().type('Admin1!')
    cy.get("input[name='password']").clear().type('Mimin123')
    cy.get("button[type='submit']").click()
    cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain.text','Invalid credentials')
});

 //Login with Input Special Character
it.only('5-login dengan input special character', () => {
    cy.get("input[name='username']").type('p&*(&^')
    cy.get("input[name='password']").type('  ')
    cy.get("button[type='submit']").click()
    cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contain.text','Invalid credentials')

});
//Login dengan fill blank field username
it.only('6-login dengan fill blank field username', () => {
   cy.get("input[name='username']").clear()
    cy.get("input[name='password']").clear().type('admin123')
    cy.get(".button[type='submit']").should('be,visible')
    cy.get(".button[type='submit']").click()
    cy.get("oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message").should('contain.text','Required')
});
//Login dengan fill blank field password
it.only('7-login dengan fill blank field password', () => {
    cy.get("input[name='username']").clear().type('Admin')
    cy.get("input[name='password']").clear()
    cy.get("button[type='submit']").click()
    cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contains.text','Required')
});