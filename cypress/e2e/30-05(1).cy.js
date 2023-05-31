import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";


it('Authorization', () => {

    loginPage.visit();
    homePage.getLoginOrRegisterButton().click;
    loginPage.submitLoginForm('irynabilyk12345', '1234567890')
    
    cy.get('span.subtext').should('contain', 'Iryna');

})