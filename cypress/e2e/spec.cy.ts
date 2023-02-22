/// <reference types="cypress" />
// @ts-check

describe("example test", () => {
  it("true is true", () => {
    expect(true).to.equal(true);
  });
});

describe("visits website", () => {
  it("passes", () => {
    cy.visit("http://localhost:3000/");
  });
});
