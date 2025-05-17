describe('DELETE Data User', () => {
  it('DELETE user successfully and return 204 status', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://reqres.in/api/users/2',
       headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        },
    }).then((response) => {
      expect(response.status).to.eq(204)
      // Optionally verify response body is empty
      expect(response.body).to.be.empty
    })
  })
})