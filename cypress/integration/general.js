describe("refined-mapy.cz", () => {
  it.skip("Deletes old screenshots", () => {
    // `trashAssetsBeforeRuns` in `cypress.json` config file seems not to work
    // https://github.com/cypress-io/cypress/issues/5033
    cy.exec("rm -rf ./cypress/screenshots/")
  })

  it("TODO", () => {
    cy.viewport(1280, 800)
    cy.visit("")
    cy.get("…").should("be.visible")
    cy.screenshot("TODO", { capture: "viewport" })
  })
})
