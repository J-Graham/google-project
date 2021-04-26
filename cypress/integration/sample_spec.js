describe("Google Search Page", () => {
  beforeEach(function () {
    cy.visit("http://127.0.0.1:5500/google.html");
  });

  it("Should have Google title", () => {
    cy.title().should("eq", "Google");
  });

  it("Should have Google Search button", () => {
    cy.get(".button-wrapper").children().first().contains("Google Search");
  });

  it("Should have I'm Feeling Lucky button", () => {
    cy.get(".button-wrapper")
      .children()
      .first()
      .next()
      .contains("I'm Feeling Lucky");
  });
});
