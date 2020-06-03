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
        let eventData = [
            "FADSS Winter Leadership Conference",
            "NSSR (National Symposium on Student Retention)",
            "APLU Annual Meeting",
            "NACADA 2019",
            "ERDI Winter 2020",
            "AASA NCE 2020",
            "TASA 2020",
            "CGCS 2019",
            "ERDI Summer 2020"
        ]
        cy.get('.menu').click()
        cy.contains('Resources').click()
        cy.contains('Events').click()
        // The following events have been hardcoded in eventData
        // due to the lack of a source of truth for the events.
        // can fail if the events are updated.
        let length = eventData.length
        for (let i = 0; i < length; i++) {
            cy.get('.res-events > .txt > h4').should('contain', eventData[i])
        }
    })

})
