describe('PUT Update Data User', () => {
  it('PUT update data user successfully', () => {
    cy.request({
      method: 'PUT',
      url: 'https://reqres.in/api/users/2',
      body: {
        name: 'morpheus',
        job: 'zion resident'
      },
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
        
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', 'morpheus')
      expect(response.body).to.have.property('job', 'zion resident')
      expect(response.body).to.have.property('updatedAt')
    })
  })
})
describe('PATCH Update Data User', () => {
  it('PATCH update data user successfully', () => {
    cy.request({
      method: 'PATCH',
      url: 'https://reqres.in/api/users/2',
      body: {
        name: 'morpheus',
        job: 'zion resident'
      },
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('name', 'morpheus')
      expect(response.body).to.have.property('job', 'zion resident')
      expect(response.body).to.have.property('updatedAt')
    })
  })
})