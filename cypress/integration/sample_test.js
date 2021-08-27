/* eslint-disable no-undef */
describe('LOgin test', () => {
  it('Visits and do a log in', () => {
    cy.visit('https://zapelino-hmg.contazap.com/')
    cy.get('h5').contains('Conta Zap');
    // cy.get('button').contains('Change the text value below');
    // cy.get('p').contains('Developed by:');

    // cy.get('button').click();
    // cy.get('p').contains('Developed by: Rangel Paolo');
  });
});
