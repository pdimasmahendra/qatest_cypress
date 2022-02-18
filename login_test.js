// Variable

const url = Cypress.env("url")
const correctEmail = Cypress.env("correctEmail")
const correctPass = Cypress.env("correctPass")
const correctEmail2 = 'buyer.auc+3@gmail.com'
const wrongPass = 'Qwerty123'

// Object Repository
const btn_loginLP = '.mr-5'
const formEmail = '#formEmail'
const formPassword = '#formPassword'
const btn_login = '.sc-hiKfDv'


describe('Login Testing', () =>{ 
    beforeEach(() => {
        cy.visit(url)
      })

    context('Negative', () =>{
        it('Wrong Password', function(){
            cy.get(btn_loginLP).click()
            cy.get(formEmail).type(correctEmail)
            cy.get(formPassword).type(wrongPass)
            cy.get(btn_login).click()
            cy.get('.text-danger').invoke('text').then((alert) => {
                expect(alert).to.eq('Invalid user credentials')
            })
        })

        it('Account not fully setup', function(){
            cy.get(btn_loginLP).click()
            cy.get(formEmail).type(correctEmail2)
            cy.get(formPassword).type(correctPass)
            cy.get(btn_login).click()
            cy.get('.text-danger').invoke('text').then((alert) => {
                expect(alert).to.eq('Account is not fully set up')
            })
        })
    })

    context('Positive',() => {
        it('Correct Username & Password', function(){
            cy.get(btn_loginLP).click()
            cy.get(formEmail).type(correctEmail)
            cy.get(formPassword).type(correctPass)
            cy.get(btn_login).click()
            cy.get('.sc-JsfZP').invoke('text').then((dashboard) => {
                expect(dashboard).to.eq('Total Potential Saving')
            })
        })
    })

})

