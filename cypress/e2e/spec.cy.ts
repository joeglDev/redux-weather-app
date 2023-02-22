/// <reference types="cypress" />
// @ts-check

import { Globals } from "../../globals";

describe("example test", () => {
  it("true is true", () => {
    expect(true).to.equal(true);
  });
});

//visits a url 
describe("visits website", () => {
  it("passes", () => {
    cy.visit(Globals.getLOCALHOST());
  });
});

describe("Location selections", () => {
  it('finds the content "h1"', () => {
    cy.visit(Globals.getLOCALHOST());

    cy.contains("Weather dashboard byJoe Gilbert");
  });
});
