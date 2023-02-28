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
    cy.contains("Weather dashboard by");
  });

  //search by element type and check attributes
  it("h1 a element contains the correct link href attribute", () => {
    cy.visit(Globals.getLOCALHOST());
    cy.contains("a", "Joe Gilbert")
      .invoke("attr", "href")
      .should("include", Globals.getGITHUB());
    cy.contains("a", "Joe Gilbert")
      .invoke("attr", "target")
      .should("include", "_blank");
  });
  
  it("h1 a element contains the correct link target attribute", () => {
    cy.visit(Globals.getLOCALHOST());
    cy.contains("a", "Joe Gilbert")
      .invoke("attr", "target")
      .should("include", "_blank");
  });
});
