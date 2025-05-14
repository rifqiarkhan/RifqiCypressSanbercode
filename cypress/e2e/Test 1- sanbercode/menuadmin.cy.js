
//Search Nama Admin
describe('Search valid admin', () => {
  it.only('6-should search valid admin name from usermanagement', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
    cy.get('input[name="username"]').type('admin');
    cy.get('.select[name="role"]').select('Admin'); // 'Admin' = value atau visible text
    cy.get('input[name="employeeName"]').type('Ricardo user');
    cy.get('.select[name="status"]').select('Enabled'); // contoh value: 'Enabled', 'Disabled'
    cy.get("button[type='submit']").click();
    // Verifikasi hasil pencarian muncul sesuai filter
    cy.contains('Ricardo user').should('be.visible');
    cy.contains('Admin').should('be.visible');
    cy.contains('Enabled').should('be.visible');
    })
});



