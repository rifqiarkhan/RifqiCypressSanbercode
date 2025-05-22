import Forgot_passwordData from "../../fixtures/forgot_passwordData.json"


class forgot_password {
    visit (){
    //Buka Halaman website Login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode');
    }

    inputUsername (username){
       cy.xpath("//input[@placeholder='Username']").type('Admin');    
    }

    klikTombolReset (){
        cy.get("button[type='submit']").click();    
    }

    visible_btn (){
       cy.get("button[type='submit']").should('be.visible')
    }

    VerifyErrorUsernameKosong (){
        cy.xpath("(//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message'])[1]").should('contains.text','Required')    
    }
    verifySuccessMessage() {
    cy.contains('Reset Password link sent successfully').should('be.visible');
    }

    verifyErrorMessage() {
    cy.get('.oxd-text.oxd-text--p.orangehrm-card-note.orangehrm-card-note--background.orangehrm-forgot-password-card-note').should('contain.text', 'If the email does not arrive, please contact your OrangeHRM Administrator.');
  }





}

export default new forgot_password()

