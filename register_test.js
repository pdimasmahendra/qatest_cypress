
//variable
const url = Cypress.env("url")
const firstName = "Buyer"
const lastName = "Auction"
const correctEmail = Cypress.env("correctEmail")
const correctPass = Cypress.env("correctPass")
const wrongPass = 'Qwerty123'
const email = "buyer.auc+5@gmail.com"


//btn
const btn_loginLP = '.mr-5'
const lb_registorNow = '.text-center > a'
const formFirstName = '#formFirstName'
const formLastName = '#formLastName'
const formEmail = '#formEmail'
const formPass = '#formPassword'
const formConfirmPass = '#formConfirmPassword'
const checkboxAgree = '#formBasicCheckbox'
const alert = '.text-danger'
const btn_Register = '.sc-hiKfDv'
const btn_continue = '.d-flex > .sc-hiKfDv'
const lb_registSucces = '[style="font-size: 24px; font-weight: 500;"]'


describe('Pengujian Register Buyer',() =>{
    beforeEach(() => {
        cy.visit(url)
        cy.get(btn_loginLP).click()
        cy.get(lb_registorNow).click()
      })

    context('negative', () =>{
        //Email already in use
        it('Email already used', function(){
            cy.get(formFirstName).type(firstName)
            cy.get(formLastName).type(lastName)
            cy.get(formEmail).type(correctEmail)
            cy.get(formPass).type(correctPass)
            cy.get(formConfirmPass).type(correctPass)
            cy.get(checkboxAgree).click()
            cy.get(btn_Register).click()
            cy.get('.text-danger').invoke('text').then((alert) => {
                expect(alert).to.eq('Email already in use')
            })
        })

        it('Passwords are not the same', function(){
            cy.get(formFirstName).type(firstName)
            cy.get(formLastName).type(lastName)
            cy.get(formEmail).type(correctEmail)
            cy.get(formPass).type(correctPass)
            cy.get(formConfirmPass).type(wrongPass)
            cy.get(checkboxAgree).click()
            cy.get(btn_Register).click()
            cy.get('.text-danger').invoke('text').then((alert) => {
                expect(alert).to.eq('Password tidak sama')
            })
        })


    })

    context('positive', () =>{
        it('Succesfull registration', function(){
            //Registration Succes
                cy.get(formFirstName).type(firstName)
                cy.get(formLastName).type(lastName)
                cy.get(formEmail).type(email)
                cy.get(formPass).type(correctPass)
                cy.get(formConfirmPass).type(correctPass)
                cy.get(checkboxAgree).click()
                cy.get(btn_Register).click()
                cy.get(lb_registSucces).invoke('text').then((alert) => {
                    expect(alert).to.eq('Registration Success')
               
            })

        })

       
    })
})