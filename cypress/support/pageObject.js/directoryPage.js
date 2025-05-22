import directoryData from '../fixtures/directoryData'


class DirectoryPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');
  }
   inputUsername (username){
        cy.get("input[placeholder='Username']", { timeout: 10000 }).should('be.visible').type('Admin');   
     }

    inputPassword (Password){
        cy.get("input[placeholder='Password']").should('be.visible').type('admin123');    
    }

    login_btn (){
        cy.get("button[type='submit']").should('be.visible').click();
    }
    
  SearchInput() {
    cy.get('input[placeholder="Type for hints..."]');
  }

  typeSearchKeyword(keyword) {
    directoryPage.typeSearchKeyword('João Victor Alves');
  }

  selectJobTitle(title) {
    cy.get('.oxd-select-wrapper').eq(0).click(); 
    cy.get('.oxd-select-dropdown').contains('HR Manager').click();
  }

  selectLocation(location) {
    cy.get('.oxd-select-wrapper').eq(1).click(); 
    cy.get('.oxd-select-dropdown').contains('Texas R&D').click();
  }

  clickSearchButton() {
    cy.get('button[type="submit"]').click();
  }

  verifySearchResults() {
    cy.get('.oxd-table-row').should('exist');
  }

  verifyNoResultsMessage() {
    cy.contains('No Records Found').should('be.visible');
  }
}

export default new DirectoryPage();