describe('Scenario Login', () => {
  // Valid Login

  it('1-login dengan benar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click() 
    
  })
});
  //Login with Invalid Password
  it('2-login dengan salah Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('Mimin12!')
    cy.get("button[type='submit']").click() 
  
});

 //Login with Invalid Username
it('3-login dengan salah username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Arjuna12!')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()

});
 //Login with Invalid Username and Password
it('4-login dengan salah username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin1!');
    cy.get("input[placeholder='Password']").type('Mimin123');
    cy.get("button[type='submit']").click();

});
 //Login with Input Special Character
it('5-login dengan salah username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Arjuna12!^');
    cy.get("input[placeholder='Password']").type('admin123!!');
    cy.get("button[type='submit']").click();

});
//forgot password
it('6-forgot password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("a[href*='forgotPassword']")
    cy.get('input[name="email"]').type('rifqiarkhan@gmail.com');
    cy.get('button[type="submit"]').click();
    cy.contains('Your password reset link has been sent to your email.').should('be.visible');
});
