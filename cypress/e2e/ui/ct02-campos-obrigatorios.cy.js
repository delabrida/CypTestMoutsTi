describe('CT02-VALIDAR OBRIGATORIEDADE DE CAMPOS DURANTE O CADASTRO', () => {
  it('VALIDAR INSERCAO DE USUARIO SEM INFORMAR OS CAMPOS OBRIGATORIOS', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="cadastrar"]').click();
    cy.contains('Nome é obrigatório').should('be.visible');
    cy.contains('Email é obrigatório').should('be.visible');
    cy.contains('Password é obrigatório').should('be.visible');
    
  })
})