// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

require("@cypress/snapshot").register();

Cypress.Commands.add("ckeditorType", (element, content) => {
  cy.window()
    .its(`CKEDITOR.instances.${element}.instanceReady`)
    .should("equal", true);

  cy.window().then((win) => {
    win.CKEDITOR.instances[element].setData(content);
    const data = win.CKEDITOR.instances[element].getData(content);
    expect(data).to.equal(content);
  });
});
