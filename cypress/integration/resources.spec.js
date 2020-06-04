describe('hobsons.com homesite verification', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
    });

    it('Verify items in the menu', function () {
        cy.get('.menu').click()
        cy.get('.nav > ul > li').then(($li) => {
            cy.verifyResources($li)
        })
    })

    it('Verify Events', function () {
        cy.get('.menu').click()
        cy.contains('Resources').click()
        cy.contains('Events').click()
        let currentYear = new Date().getFullYear()
        cy.get('.res-events').then((events) => {
            for (let i = 0; i < events.length; i++) {
                cy.get('.res-events > .txt').eq(i).then((elem) => {
                    let text = elem.text()
                    // the condition is added to filter out all events from the current year
                    // if asserted without condition, the test will fail on non current year events
                    if (text.includes(currentYear)) {
                        cy.wrap(elem.text()).should('contain', currentYear)
                    }
                })
            }
        })
    })

})
