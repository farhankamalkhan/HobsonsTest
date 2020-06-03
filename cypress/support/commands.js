Cypress.Commands.add('isNotInViewport', element => {
    cy.get(element).then($el => {
        const top = 0
        const rect = $el[0].getBoundingClientRect()
        cy.wrap(rect.top).should('not.to.be.greaterThan', top)
    })
})

Cypress.Commands.add('isInViewport', element => {
    cy.get(element).then($el => {
        const bottom = Cypress.$(cy.state('window')).height()
        const rect = $el[0].getBoundingClientRect()

        cy.wrap(rect.top).should('not.to.be.greaterThan', bottom)
    })
})

Cypress.Commands.add('verifyResources', ($li) => {
    let menuData = [
        "Home",
        "Solutions",
        "Services",
        "Resources",
        "Careers",
        "About",
        "Blog",
        "Get Started"
    ]
    let resourcesData = [
        "All",
        "Webinars",
        "Events",
        "Case Studies",
        "White Papers",
        "Blog",
        "Media",
        "Podcast"
    ]
    let length = $li.length
    for (let i = 0; i < length; i++) {
        cy.wrap($li[i]).find('a').invoke('text').should('contain', menuData[i])
        if (menuData[i] == "Resources") {
            for (let j = 0; j < resourcesData; j++) {
                cy.wrap($li[i]).find('ul > li').then(($resourcesLi) => {
                    cy.wrap($resourcesLi[j]).invoke('text').should('contain', resourcesData[j])
                })
            }
        }
    }
})

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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
