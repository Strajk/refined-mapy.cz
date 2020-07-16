const sessionCookie = "TODO"

Cypress.Cookies.defaults({
  whitelist: sessionCookie,
})

describe("refined-mapy.cz", () => {
  before(() => {
    login()
  })

  it("Basics", () => {
    cy.visit("/")
    cy.get(".control-layer button[title='Aerial Map']").should("not.be.visible")
    cy.get(".control-layer button[title='Outdoor']").should("not.be.visible")
  })
})

function login () {
  cy.getCookie(sessionCookie).then(cookie => {
    if (cookie) {
      cy.log("Already logged in, continuing")
    } else {
      cy.log("Logging in")
      const username = Cypress.env("username") // eslint-disable-line no-unused-vars
      const password = Cypress.env("password") // eslint-disable-line no-unused-vars
      // if (!password) throw new Error("Missing password value, set using CYPRESS_password=...")

      // TODO
    }
  })
}
