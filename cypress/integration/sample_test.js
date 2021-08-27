/* eslint-disable no-undef */
describe('Visit the website', () => {
  it('Check elements', () => {
    cy.visit('https://zapelino-hmg.contazap.com/');

    cy.get('h5').contains('Conta Zap');    
    cy.get('label[for=id__input__email]').contains('Email');
    cy.get('label[for=id__input__password]').contains('Senha secreta');
    cy.get('label[for=id__input__companyId]').contains('Empresa');
    cy.get('a').contains(' Esqueceu a senha?');
    cy.get('button[type=submit]').contains('Entrar');
  });
  
  it('Login', () => {
    cy.get('input[name=email]').type('rangel.bomfim@contazap.com');
    cy.get('input[name=password]').type('12345678k');
    cy.get('div.css-1hwfws3').click();
    cy.get('div.css-1cegrgq').click();
    cy.get('button[type=submit]').click();
  });
  //
  // cy.get('button').contains('Change the text value below');
  // cy.get('p').contains('Developed by:');

  // cy.get('button').click();
  // cy.get('p').contains('Developed by: Rangel Paolo');
});
