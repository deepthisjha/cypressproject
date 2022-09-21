import { LoginPage } from "./pages/login_page"
const loginPage = new LoginPage()

describe('All Login Tests', function () {

    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })
    it.only('Login with valid credentials', function () {

        //cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        //cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
        // cy.get('.oxd-button').click()

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()


    })

    it.skip('Login with invalid password', function () {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()



    })
     it('Login with invalid username', function () {
        //cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        loginPage.enterUsername('user')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('.oxd-userdropdown-name').click()
    
    
    
    })
    
    
    



})

