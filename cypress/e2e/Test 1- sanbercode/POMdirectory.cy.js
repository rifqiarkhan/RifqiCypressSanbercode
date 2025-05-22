import directoryPage from '../../support/pageObject/directoryPage';
import directoryData from "../../directoryData.json";
import loginPage from '../../support/pageObject.js/loginPage';

describe('Directory Page', () => {
  beforeEach(() => {
    //login terlebih dahulu 
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("input[name='username']").type('Admin');
    cy.get("input[name='password']").type('admin123');
    cy.get("button[type='submit']").click();
  });
  it('should search with job title and location', () => {
    directoryPage.typeSearchKeyword('João Victor Alves');
    directoryPage.selectJobTitle('HR Manager');
    directoryPage.selectLocation('Texas R&D');
    directoryPage.clickSearchButton();
    directoryPage.verifySearchResults(); 
  });

  it('should display no records found for wrong keyword', () => {
    directoryPage.typeSearchKeyword('Ags');
    directoryPage.clickSearchButton();
    directoryPage.verifyNoResultsMessage();
  });
})
