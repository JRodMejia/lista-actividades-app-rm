import { e2e } from '../support/constantes';

describe('Agregar una actividad', () => {
  it('Verifica que se puede agregar una actividad a la lista', () => {
    //ir a la pagina principal
    cy.visit('/');
    cy.validacionInicial();

    //Agregar actividad
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).click();
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Actividad de prueba');
    cy.get(e2e.BOTON_AGREGAR).click();

    cy.get('[data-cy="oWTz10"]').should('have.text','Actividad de prueba');

  })
})