/// <reference types= 'cypress' />

//single user
 describe('Reqres API Testing Single User', () => {
 it('GET API Tesing', () => {
    cy.request('GET', 'https://reqres.in/api/users/2')
    .then((response) =>  {
        expect(response.status).to.equal(200)
        expect(response.body).to.not.be.null
    })   

 })
});
//single user not found
describe('Reqres API Testing Single User Not Found', () => {
 it('GET API Tesing', () => {
    cy.request({
        method:'GET', 
        url:'https://reqres.in/api/users/23',
        failOnStatusCode: false,
        headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
    })
    .then((response) =>  {
        expect(response.status).to.eq(404)
        expect(response.body).to.deep.equal({})
    })   

 })
});
//single user resource
describe('GET Single User Resource', () => {
  it('GET single resource successfully', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/unknown/2'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data')
      expect(response.body.data).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value')
      expect(response.body.data.id).to.eq(2)
    })
  })
}); 
//single user resource not found
describe('GET Single Resource Not Found', () => {
  it('GET Single Resource Not Found', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/unknown/23',
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      },
    }).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body).to.be.empty
    })
  })
})


