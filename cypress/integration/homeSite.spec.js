describe('hobsons.com homesite verification', () => {

    beforeEach(() => {
        cy.visit(Cypress.config().baseUrl)
    });

    it('Verify that the homesite property renders', function () {
        cy.title().should('contain', 'Education Advances | Hobsons')
        cy.get('#logo > a').should('have.attr', 'href').and('contain', 'https://www.hobsons.com')
        cy.get('#logo').invoke('text').should('contain', 'Hobsons')
    })

    it('Verify the section headers and position', function () {
        cy.get('.pagetitle > h1').invoke('text')
            .should('contain', 'We help students across the journey of a lifetime.')
        cy.get('.pagetitle > h1 > strong').should('contain', 'We help students')
        cy.get('.home-more').click().isInViewport('#section-learn-more').isNotInViewport('.header')
        cy.get('#section-learn-more > h2').should('contain', 'How can we help your students?')
        cy.get('#section-learn-more > h2 > strong').should('contain', 'your students?')
    })

})
