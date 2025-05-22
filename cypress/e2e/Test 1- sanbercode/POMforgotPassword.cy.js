import forgot_passwordPage from "../../support/pageObject.js/forgot_passwordPage";
import forgot_passwordData from "../../fixtures/forgot_passwordData.json";

describe('Forgot Password Page', () => {
  beforeEach(() => {
    forgot_passwordPage.visit();
  });

  it('should display success message for valid username', () => {
    forgot_passwordPage.inputUsername('Admin');
    forgot_passwordPage.klikTombolReset();
    forgot_passwordPage.verifySuccessMessage();
  });

  it('should show error for empty username', () => {
    forgot_passwordPage.klikTombolReset();
    forgot_passwordPage.VerifyErrorUsernameKosong();
  });

  it('should show error for invalid username', () => {
    forgot_passwordPage.inputUsername('invalid_user');
    forgot_passwordPage.klikTombolReset();
    forgot_passwordPage.verifyErrorMessage();
  });
});