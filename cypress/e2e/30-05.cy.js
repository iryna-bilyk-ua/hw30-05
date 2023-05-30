describe('Registration', () => { 
  it('should register with correct data', () => { 
     cy.visit('https://automationteststore.com/index.php?rt=account/create'); 
     cy.get('#AccountFrm_firstname').type('Iryna');
     cy.get('#AccountFrm_lastname').type('Bilyk');
     cy.get('#AccountFrm_email').type('bilyk.iren12345@gmail.com');
     cy.get('#AccountFrm_telephone').type('1234567890');
     cy.get('#AccountFrm_fax').type('12345');
     cy.get('#AccountFrm_company').type('Energy');
     cy.get('#AccountFrm_address_1').type('John str, 1');
     cy.get('#AccountFrm_city').type('Filadelfia');
     cy.get('select#AccountFrm_country_id').select('United Kingdom');
     cy.get('select#AccountFrm_zone_id', {timeout: 2000}).select('Aberdeen');
     cy.get('#AccountFrm_postcode').type('98765');
     cy.get('#AccountFrm_loginname').type('irynabilyk12345');
     cy.get('#AccountFrm_password').type('1234567890');
     cy.get('#AccountFrm_confirm').type('1234567890');
     cy.get('#AccountFrm_newsletter0').click();
     cy.get('#AccountFrm_agree').click().check().should('be.checked');

     cy.get('[title="Continue"]').click();
  }); 
});

describe('Registration', () => { 
  it('should register with correct data', () => { 
     cy.visit('https://automationteststore.com/index.php?rt=account/login'); 
     cy.get('#loginFrm_loginname').type('irynabilyk12345');
     cy.get('#loginFrm_password').type('1234567890');
     cy.get('#loginFrm > fieldset > button').click();
  }); 
});
