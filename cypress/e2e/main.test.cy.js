const WEBSITE_URL = "https://tvolearn.com/pages/grade-6-mathematics";
// const WEBSITE_URL = "https://google.com";

const TIMEOUT = 1000 * 60 * 1;

describe("Validate Page Functionality", function () {
  beforeEach(function () {
    cy.on("uncaught:exception", (err, runnable) => {
      // returning false here prevents Cypress from failing the test

      // Cannot read properties of undefined (reading 'style')
      if (
        err.message.includes(
          "Cannot read properties of undefined (reading 'style')"
        )
      ) {
        return false;
      }

      // passthrough all other errors

      return true;
    });
  });

  it("should be able to visit website", function () {
    cy.visit(WEBSITE_URL, { timeout: TIMEOUT, javascript: false });
  });

  it("h1 header says 'Grade 6'", function () {
    // cy.get("h1").contains("Grade 6");
    // ensure timeout is long enough to wait for the page to load
    cy.visit(WEBSITE_URL, { timeout: TIMEOUT, javascript: false });
    cy.get("h1", { timeout: TIMEOUT }).contains("Grade 6", {
      timeout: TIMEOUT,
    });
  });

  it("h2 header says 'Mathematics'", function () {
    cy.visit(WEBSITE_URL, { timeout: TIMEOUT, javascript: false });
    cy.get("h2", { timeout: TIMEOUT }).contains("Mathematics", {
      timeout: TIMEOUT,
    });
  });
});
