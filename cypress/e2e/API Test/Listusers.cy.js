/// <reference types= 'cypress' />    


describe('Reqres API Testing List Users', () => {
 it('GET API Tesing', () => {
    cy.request('GET', 'https://reqres.in/api/users?page=2')
    .then((response) =>  {
        expect(response.status).to.equal(200)
        expect(response.body).to.not.be.null
    })   

 })
});
describe('GET List of Resources',() => {
  it('GET list of resources successfully', () => {
    cy.request({
      method: 'GET',
      url: 'https://reqres.in/api/unknown'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('data').and.be.an('array')
      expect(response.body.data[0]).to.have.all.keys('id', 'name', 'year', 'color', 'pantone_value')
    })
  })
}); 


