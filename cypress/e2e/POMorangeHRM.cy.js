import loginPage from "../support/pageObject.js/loginPage";
import loginData from "../fixtures/loginData.json"


describe('Scenario Login', () => {

  beforeEach(() => {
    loginPage.visit();
    //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('1-login dengan benar', () => {
    //cy.get("input[placeholder='Username']", { timeout: 10000 }).should('be.visible').type('Admin');
    loginPage.inputUsername (loginData.validUsername)
    //cy.get("input[placeholder='Password']").should('be.visible').type('admin123');
    loginPage.inputPassword (loginData.validPassword)
    //cy.get("button[type='submit']").should('be.visible').click();
    loginPage.login_btn ()
  });

  //Login with Invalid Password
  it('2-login dengan salah Password', () => {
    //cy.get("input[placeholder='Username']", { timeout: 10000 }).should('be.visible').type('Admin');
    loginPage.inputUsername (loginData.validUsername)
    //cy.get("input[placeholder='Password']").should('be.visible').type('Ptest1230');
    loginPage.inputPassword (loginData.invalidPassword)
    //cy.get("button[type='submit']").should('be.visible')
    //cy.get("button[type='submit']").click()
    loginPage.login_btn ()
    //cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contains.text','Invalid credentials')
  
});
//Login invalid Username
  it('3-login dengan salah Username', () => {
    //cy.get("input[placeholder='Username']", { timeout: 10000 }).should('be.visible').type('P');
    loginPage.inputUsername (loginData.invalidUsername)
    //cy.get("input[placeholder='Password']").should('be.visible').type('admin123');
    loginPage.inputPassword (loginData.validPassword)
    //cy.get("button[type='submit']").should('be.visible')
    //cy.get("button[type='submit']").click()
    loginPage.login_btn ()
    //cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contains.text','Invalid credentials')
  
});
  //Login dengan fill blank field username
  it('4-login dengan fill blank field username', () => {
    //cy.get("input[placeholder='Username']").should('be.visible');
    //cy.get("input[placeholder='Username']").clear()
    //cy.get("input[placeholder='Password']").clear().type('admin123')
    loginPage.inputUsername (loginData.validPassword)
    //cy.get("button[type='submit']").should('be.visible')
    //cy.get("button[type='submit']").click()
    //cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain.text','Required')
    loginPage.login_btn ()
    loginPage.VerifyUsernameBlank ()
});
//Login dengan fill blank field password
it('5-login dengan fill blank field password', () => {
    //cy.get("input[placeholder='Username']").should('be.visible');
    //cy.get("input[placeholder='Username']").clear()
    loginPage.inputUsername (loginData.validUsername)
    //cy.get("input[placeholder='Password']").clear().type('admin123')
    //cy.get("button[type='submit']").should('be.visible')
    //cy.get("button[type='submit']").click()
    //cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain.text','Required')
    loginPage.login_btn ()
    loginPage.VerifyPasswordBlank ()
})
});
