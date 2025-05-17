describe('GET Delayed Response - Reqres API', () => {
  it('should get delayed user list successfully', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/users?delay=3',
      headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'reqres-free-v1'
        },
    }).then((response) => {
      console.log(response)
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.be.an('array')
    })
  })
})