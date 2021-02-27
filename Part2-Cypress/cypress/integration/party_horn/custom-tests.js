describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5501/Part2-Cypress/index.html');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider')
      .then(($el) =>  {
        expect($el).to.have.value(75);
      });
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number')
      .then(($el) => {
        expect($el).to.have.value('33');
      });
  });

  it('Volume of audio changes when slider value changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('audio')
      .then(($el) => {
        expect($el).to.have.prop('volume', 0.33);
      });
  });
  
  it('Image source changes when party horn selected', () => {
    cy.get('#radio-party-horn').check().should('be.checked');
    cy.get('#sound-image')
      .then(($el) => {
        expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
      });
  });

  it('Sound source changes when party horn selected', () => {
    cy.get('#radio-party-horn').check().should('be.checked');
    cy.get('#horn-sound')
      .then(($el) => {
        expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
      });
  });

  describe('Volume image changes when volume changes', () => {
    it('3', () => {
      cy.get('#volume-number').clear().type('75');
      cy.get('#volume-image')
        .then(($el) => {
          expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
        });
    });
    it('2', () => {
      cy.get('#volume-number').clear().type('50');
      cy.get('#volume-image')
        .then(($el) => {
          expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
        });
    });
    it('1', () => {
      cy.get('#volume-number').clear().type('20');
      cy.get('#volume-image')
        .then(($el) => {
          expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
        });
    });
    it('0', () => {
      cy.get('#volume-number').clear().type('0');
      cy.get('#volume-image')
        .then(($el) => {
          expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
        });
    });
  });

  it('Honk button is disabled when textbox empty', () => {
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').should('be.disabled');
  });

  it('Honk button is disabled when non-number entered', () => {
    cy.get('#volume-number').clear().type('e');
    cy.get('#honk-btn').should('be.disabled');
  });

  it('Error when number out of range entered', () => {
    cy.get('#volume-number').clear().type(150);
    cy.get('#volume-number')  
      .then($el => {
        const invalid = window.getComputedStyle($el[0], ':invalid').getPropertyValue('content');
        expect(invalid).not.to.equal('normal');
      });
  });

});
