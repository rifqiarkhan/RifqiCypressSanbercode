

describe('Scenario Login', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('1-login dengan benar', () => {
    cy.get("input[placeholder='Username']", { timeout: 10000 }).should('be.visible').type('Admin');
    cy.get("input[placeholder='Password']").should('be.visible').type('admin123');
    cy.get("button[type='submit']").should('be.visible').click();
  });

  //Login with Invalid Password
  it('2-login dengan salah Password', () => {
    cy.get("input[placeholder='Username']", { timeout: 10000 }).should('be.visible').type('Admin');
    cy.get("input[placeholder='Password']").should('be.visible').type('Ptest1230');
    cy.get("button[type='submit']").should('be.visible')
    cy.get("button[type='submit']").click()
    cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contains.text','Invalid credentials')
  
});

  //Login dengan fill blank field username
  it('3-login dengan fill blank field username', () => {
    cy.get("input[placeholder='Username']").should('be.visible');
    cy.get("input[placeholder='Username']").clear()
    cy.get("input[placeholder='Password']").clear().type('admin123')
    cy.get("button[type='submit']").should('be.visible')
    cy.get("button[type='submit']").click()
    cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain.text','Required')
});


});