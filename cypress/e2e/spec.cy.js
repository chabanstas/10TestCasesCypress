//// <reference types="Cypress" />

describe('My First Test', () => {
  xit('Checking the LinkedIn link in the footer', () => {
    cy.visit('https://telnyx.com/')

    //cy.get('button').contains('Accept and close').click()
    cy.get('footer[class*=sc-7b6c9f9b-0]').scrollIntoView()
    cy.get('span').contains('Connect on LinkedIn').click()
    
    cy.url().should('include', 'https://telnyx.com/')
  })
  xit('Checking the drop-down menu of the "Prices" section for visibility on hover', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://telnyx.com/')
    cy.get('li[class*=Text-sc-5o8owa-0]').contains('Pricing').trigger('mouseover')
    cy.get('li[class*=Text-sc-5o8owa-0]').contains('Pricing').should('be.visible')
  })
  xit('Checking the display of menu sections in the viewport', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://telnyx.com/')
    cy.get('div[class$=hhCIhu]').should('be.visible')
  })
  xit('Checking the search field on the «Support Center» page', () => {
    cy.visit('https://support.telnyx.com/en/')
    cy.get('[type="text"]')
    .type('start')
    .should('have.value', 'start')
  })
  xit('Checking the header logo image to reload the page on the Support Center page', () => {
    cy.visit('https://support.telnyx.com/en/')
    cy.get('[type="text"]')
    .type('start\n')
    .should('have.value', 'start')
    cy.url().should('include', 'https://support.telnyx.com/en/?q=start')
    cy.get('header img[alt="Telnyx Support"]').click()
    cy.url().should('include', 'https://support.telnyx.com/en/')
  })
  xit('Checking the «API v1» button is focused on the Developers page', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://developers.telnyx.com/docs/v2')

    cy.get('button[class*=sc-45040057-0][class$=bqyYmg]').contains('API v1').click()
    cy.get('button[class*=sc-45040057-0][class$=bqyYmg]').contains('API v1').should('be.focused')

    cy.get('button[class*=sc-45040057-0][class$=goHxkV]').contains('API v2').click()
    cy.get('button[class*=sc-45040057-0][class$=bqyYmg]').contains('API v1').should('not.be.focused')
  })
  xit('Log in with valid data of a non-existent user', () => {
    cy.visit('https://portal.telnyx.com/#/login/sign-in')
    cy.get('form>div>diV>label>div>div>input[autocomplete="username"]').type('fake@email.com').should('have.value', 'fake@email.com')
    cy.get('form>div>diV>label>div>div>input[name="password"]').type('QWErty123!').should('have.value', 'QWErty123!')
    cy.get('form[aria-label="loginForm"]>button').click()
    cy.get('span[class*=Message__MessageCopy-sc-1lbs5ge-2]').should('be.visible')
  })
  xit('Checking the password reset for an unregistered email address', () => {
    cy.visit('https://portal.telnyx.com/#/login/sign-in')
    cy.get('[href="/#/login/password-reset"]').click()
    cy.get('form>div>label>div>div>input[name="email"]').type('fake@email.com').should('have.value', 'fake@email.com')
    
    cy.get('form>div>div>button[role="button"]').click()
    cy.contains('We have accepted your password reset request.').should('be.visible')
  })
  xit('Checking the password reset for an unregistered email address', () => {
    cy.visit('https://portal.telnyx.com/#/login/sign-in')
    cy.get('[href="/#/login/password-reset"]').click()
    cy.get('form>div>label>div>div>input[name="email"]').type('mailwithoutaemail.com').should('have.value', 'mailwithoutaemail.com')
    
    cy.get('form>div>div>button[role="button"]').click()
    cy.contains('Please enter a valid email address.').should('be.visible')
  })
  it('Login verification with a blank field for Business Name via Single Sign-On', () => {
    cy.visit('https://portal.telnyx.com/#/login/sign-in')
    cy.get('div>button[name="sso"]').click()
       
    cy.get('button[type="submit"][class$=hKxygd]').dblclick()
    cy.contains('Required').should('be.visible')
  })
})