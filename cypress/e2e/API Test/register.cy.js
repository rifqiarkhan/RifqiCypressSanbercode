describe('POST Register Successful', () => {
  it('POST Register Sucessful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      body: {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('token')
    })
  })
})
describe('POST Register Unsuccessful', () => {
  it('POST Register Unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/register',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      body: {
    "email": "sydney@fife",
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error')
    })
  })
})