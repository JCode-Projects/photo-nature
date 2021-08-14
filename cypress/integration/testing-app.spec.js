/// <reference types="cypress" />

describe('Testing the app in version 1.0', () => {
    it('Testing a index page', () => {
        cy.visit('/');
        cy.get('[data-cy=header]').should('exist');
        cy.get('[data-cy=icon]').should('exist');
        cy.get('[data-cy=icon]').invoke('attr', 'href').should('equal', '/');

        cy.get('[data-cy=home]').should('exist');
        cy.get('[data-cy=home]').click();
        cy.wait(1000);
        cy.visit('/');
        
        cy.get('[data-cy=gallery]').should('exist');
        cy.get('[data-cy=gallery]').click();
        cy.wait(1000);
        cy.visit('/');
        
        cy.get('[data-cy=about]').should('exist');
        cy.get('[data-cy=about]').click();
        cy.wait(1000);
        cy.visit('/');

        cy.get('[data-cy=main-index]').should('exist');

        cy.get('[data-cy=know]').should('exist');
        cy.get('[data-cy=know-title]').invoke('text').should('equal', 'know Our Planet');

        cy.get('[data-cy=gallery-section]').should('exist');
        cy.get('[data-cy=gallery-section-title]').invoke('text').should('equal', 'Gallery');

        cy.wait(1000);

        cy.get('[data-cy=image]').eq(0).should('exist');
        cy.get('[data-cy=show-image]').eq(0).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);
        
        cy.get('[data-cy=image]').eq(2).should('exist');
        cy.get('[data-cy=show-image]').eq(2).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);
        
        cy.get('[data-cy=image]').eq(4).should('exist');
        cy.get('[data-cy=show-image]').eq(4).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);

        cy.get('[data-cy=footer]').should('exist');
        cy.get('[data-cy=copy]').should('exist');
        cy.get('[data-cy=copy]').invoke('text').should('equal', 'All rights reserved 2021 ©');
        cy.wait(1000);
    });

    it('Testing a gallery page', () => {
        cy.visit('/gallery.html');

        cy.get('[data-cy=main-gallery]').should('exist');
        cy.get('[data-cy=main-title]').should('exist');
        cy.get('[data-cy=main-title]').invoke('text').should('equal', 'All Photographs');

        cy.wait(1000);

        cy.get('[data-cy=image]').eq(0).should('exist');
        cy.get('[data-cy=show-image]').eq(0).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);

        cy.get('[data-cy=image]').eq(2).should('exist');
        cy.get('[data-cy=show-image]').eq(2).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);
        
        cy.get('[data-cy=image]').eq(4).should('exist');
        cy.get('[data-cy=show-image]').eq(4).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);
        
        cy.get('[data-cy=image]').eq(6).should('exist');
        cy.get('[data-cy=show-image]').eq(6).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);
        
        cy.get('[data-cy=image]').eq(8).should('exist');
        cy.get('[data-cy=show-image]').eq(8).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);
        
        cy.get('[data-cy=image]').eq(10).should('exist');
        cy.get('[data-cy=show-image]').eq(10).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);
        
        cy.get('[data-cy=image]').eq(12).should('exist');
        cy.get('[data-cy=show-image]').eq(12).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);
        
        cy.get('[data-cy=image]').eq(14).should('exist');
        cy.get('[data-cy=show-image]').eq(14).click();
        cy.wait(500);
        cy.get('[data-cy=hidden-image]').click();
        cy.wait(500);
        
        cy.wait(1000);
    });
    
    it('Testing a about page', () => {
        cy.visit('/about.html');
        cy.get('[data-cy=main-about]').should('exist');
        cy.wait(500);
        
        cy.get('[data-cy=objective]').should('exist');
        cy.wait(500);

        cy.get('[data-cy=recycle]').should('exist');
    });
});