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

//.contains
describe("Location selections", () => {
  it('finds the content "h1"and its "a" link element', () => {
    cy.visit(Globals.getLOCALHOST());
    //h1
    cy.contains("Weather dashboard by");
    cy.contains("a","Joe Gilbert").invoke('attr','href')
    .should('include','https://github.com/joeglDev')
  });
});
