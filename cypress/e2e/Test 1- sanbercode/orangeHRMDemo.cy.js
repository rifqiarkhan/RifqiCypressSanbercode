describe('Scenario Login', async function () {
  // Valid Login

  it.only('1-login dengan benar', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.gey(".button[type='submit']")
    
  })
});
  //Login with Invalid Password
  it.only('2-login dengan salah Password', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get ("input[placeholder='Password']").type('Mimin12!')
    cy.get("button[type='submit']").click()
  
});

 //Login with Invalid Username
it.only('3-login dengan salah username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Arjuna12!')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").click()

});
 //Login with Invalid Username and Password
it.only('4-login dengan salah username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin1!');
    cy.get("input[placeholder='Password']").type('Mimin123');
    cy.get("button[type='submit']").click();

});
 //Login with Input Special Character
it.only('5-login dengan salah username', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Arjuna12!^');
    cy.get("input[placeholder='Password']").type('admin123!!');
    cy.get("button[type='submit']").click();

});
