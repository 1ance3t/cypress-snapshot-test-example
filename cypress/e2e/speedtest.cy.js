describe(Cypress.env("speedtestUrl"), () => {
  beforeEach(() => {
    cy.visit(Cypress.env("speedtestUrl"));
    cy.location("href").should("eq", Cypress.env("speedtestUrl"));
  });

  it(Cypress.env("speedtestUrl"), () => {
    cy.get(`meta[name="${Cypress.env("description")}"]`).snapshot({
      name: "description",
    });
    cy.get(`meta[name="${Cypress.env("viewport")}"]`).snapshot({
      name: "viewport",
    });
    cy.get(`meta[name="${Cypress.env("keywords")}"]`).snapshot({
      name: "keywords",
    });
    cy.get(Cypress.env("og:description")).snapshot({
      name: "og:description",
    });
    cy.get(Cypress.env("og:image")).snapshot({
      name: "og:image",
    });
    cy.get(Cypress.env("og:url")).snapshot({
      name: "og:url",
    });
    cy.get(Cypress.env("og:title")).snapshot({
      name: "og:title",
    });
    cy.get(Cypress.env("canonical")).snapshot({
      name: "canonical",
    });
  });
});
