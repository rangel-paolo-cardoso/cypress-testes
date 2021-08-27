/* eslint-disable no-undef */
describe('Visit the website and confirm', () => {
  it('Visits and do a log in', () => {
    // Visits Zapelino
    cy.visit('https://zapelino-hmg.contazap.com/');

    // Verify screen elements
    cy.get('h5').contains('Conta Zap');

    cy.get('label[for=id__input__email]').contains('Email');

    cy.get('label[for=id__input__password]').contains('Senha secreta');

    cy.get('label[for=id__input__companyId]').contains('Empresa');

    cy.get('a').contains(' Esqueceu a senha?');

    cy.get('button[type=submit]').contains('Entrar');
  });

  //
  // cy.get('button').contains('Change the text value below');
  // cy.get('p').contains('Developed by:');

  // cy.get('button').click();
  // cy.get('p').contains('Developed by: Rangel Paolo');
});
