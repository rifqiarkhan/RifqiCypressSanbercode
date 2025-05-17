describe('POST Login Successful', () => {
  it('POST Login Sucessful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      body: {
    "email": "peter@klaven",
      }
    }).then((response) => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('error')
    })
  })
})

describe('POST Login Unsuccessful', () => {
  it('POST Login Unsuccessful', () => {
    cy.request({
      method: 'POST',
      url: 'https://reqres.in/api/login',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
      body: {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('token')
    })
  })
})