import { e2e } from '../support/constantes';

describe('Agregar una actividad', () => {
  it('Verifica que se puede editar una actividad existente', () => {
    //ir a la pagina principal
    cy.visit('/');
    cy.validacionInicial();

    //Agregar actividad
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).click();
    cy.get(e2e.CAMPO_AGREGAR_ACTIVIDAD).type('Actividad de prueba');
    cy.get(e2e.BOTON_AGREGAR).click();
    //verifica texto agregado
    cy.get(e2e.CAMPO_MOSTRAR_RESULTADO)
        .should('have.text','Actividad de prueba');
    //verifica existencia de boton
    cy.get(e2e.BOTON_EDITAR).should('contain','Editar');
    cy.get(e2e.BOTON_EDITAR).click();
    //cy.get(e2e.CAMPO_EDITAR, {timeout:3000}).should('have.text','Actividad de prueba');
    cy.get(e2e.CAMPO_EDITAR).click();
    //agrega texto nuevo
    cy.get(e2e.CAMPO_EDITAR).type('Actividad de prueba 2');
    cy.get(e2e.BOTON_GUARDAR).click();
    //verifica texto nuevo
    cy.get(e2e.CAMPO_MOSTRAR_RESULTADO)
        .should('have.text','Actividad de prueba 2');
  })
})