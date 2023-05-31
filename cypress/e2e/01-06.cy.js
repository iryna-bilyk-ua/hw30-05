describe('Authorization+order', () => { 
  it('should register with correct data', () => { 
     cy.visit('https://automationteststore.com/index.php?rt=account/login'); 
     cy.get('#loginFrm_loginname').type('irynabilyk12345');
     cy.get('#loginFrm_password').type('1234567890');
     cy.get('button[type="submit"]').contains('Login').click();
     cy.get('[data-original-title="My wish list"]').click();
     cy.get('[class="fa fa-cart-plus fa-fw"]').click();
     cy.get('#cart_checkout2').click();
     cy.get('#checkout_btn').click();
     //не працює, чому? -> cy.get('[#maincontainer > div > div > div > h1 > span.maintext]').should('contain', 'YOUR ORDER HAS BEEN PROCESSED!') 
     //перший варіант
     cy.get('[href^="https://automationteststore.com/index.php?rt=checkout/success"]').should('contain', 'Success')
     //другий варіант
     cy.get('li:nth-child(6)').should('contain', 'Success')
     //третій варіант
     cy.get('body > div.container-fixed > div:nth-child(2) > div:nth-child(2) > section > ul > li:nth-child(6) > a').should('contain', 'Success')
  })   
});




