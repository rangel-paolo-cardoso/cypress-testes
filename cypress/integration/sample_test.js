/* eslint-disable no-undef */
describe('My first test', () => {
  it('VIsits the kitchen sink', () => {
    cy.visit('http://localhost:3000/')
    cy.get('h2').contains('Hello World!');
    cy.get('button').contains('Change the text value below');
    cy.get('p').contains('Developed by:');

    cy.get('button').click();
    cy.get('p').contains('Developed by: Rangel Paolo');
  });
});
