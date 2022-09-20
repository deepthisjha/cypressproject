/// <reference types= "cypress"/>
it('Google Search', () => {
    cy.visit('https://google.com')
   // cy.get('.gLFyf',{timeout:5000}).type('automation step by step{Enter}')
   cy.get('.gLFyf').type('automation step by step{Enter}')
    //cy.get('.FPdoLc > center > .gNO89b').click()
    cy.wait(2000)
    cy.contains('Videos').click()
})