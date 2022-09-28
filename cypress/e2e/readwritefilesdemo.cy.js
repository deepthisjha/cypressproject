
///<reference_types="cypress"/>
 

before(function(){
    
    cy.fixture('example.json').as('test_data')
})



it('Read files using fixture', function(){
    cy.fixture('example.json').then((data) => {
    cy.log(data.name)
    cy.log(data.email)
    })
  cy.log(this.test_data.name)
})

it('read file using readFile()',function(){
    cy.readFile('./cypress/fixtures/example.json').then((data)=> {
        cy.log(data.name)
    })
})

it('write ile demo', function(){
     cy.writeFile('sample.txt','Hello I am Deepthi \n')

     cy.writeFile('sample.txt','I am learning cypress',{flag:'a+'})
})