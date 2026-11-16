describe('CT01-CADASTRAR NOVO USUARIO COM SUCESSO', () => {
  it('INSERIR NOVO USUARIO NA PLATAFORMA SERVER REST', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type('joao silva');
    cy.get('[data-testid="email"]').type('joao@google.com');
    cy.get('[data-testid="password"]').type('marte321');
    cy.get('[data-testid="cadastrar"]').click();
  })
})