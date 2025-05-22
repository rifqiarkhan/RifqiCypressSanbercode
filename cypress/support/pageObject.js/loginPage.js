import loginData from "../../fixtures/loginData.json"


class loginPage {
    visit (){
    //Buka Halaman website Login
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    inputUsername (username){
        cy.get("input[placeholder='Username']", { timeout: 10000 }).should('be.visible').type('Admin');    }

    inputPassword (Password){
        cy.get("input[placeholder='Password']").should('be.visible').type('admin123');    }

    login_btn (){
        cy.get("button[type='submit']").should('be.visible').click();
    
    }

    visible_btn (){
        cy.get("button[type='submit']").should('be.visible')
    }

    VerifyLoginSuccess (){
        cy.url().should('include','/dashboard')
    }

    verifyUsernamePasswordError (){
        cy.xpath("//div[@class='oxd-alert-content oxd-alert-content--error']").should('contains.text','Invalid credentials')    
    }
    
    VerifyUsernameBlank (){
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain.text','Required')
        
    }

    VerifyPasswordBlank (){
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contain.text','Required')


    }
      VerifyForgotPassword (){
        cy.contains('Reset Password link sent successfully').should('be.visible');
    }
        
      inputUsernameForgotPass (){
        cy.get("input[placeholder='Username']").type('Admin');

      }


    Resetpassword_btn (){
       cy.get("button[type='submit']").click();

    }

    VerifyUsernameForgotPassBlank (){
       cy.xpath("//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']").should('contains.text','Required')


 }
    }


export default new loginPage() 

