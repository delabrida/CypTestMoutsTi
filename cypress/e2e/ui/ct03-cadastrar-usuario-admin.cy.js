describe('CT03-CADASTRAR NOVO USUARIO ADMINISTRADOR', () => {
  it('INSERIR NOVO USUARIO ADMIN', () => {
    cy.visit('https://front.serverest.dev/login');
    cy.get('[data-testid="cadastrar"]').click();
    cy.get('[data-testid="nome"]').type('maria admin');
    cy.get('[data-testid="email"]').type('maria-adm@google.com');
    cy.get('[data-testid="password"]').type('maria123jd');
    cy.get('[data-testid="checkbox"]').click();
    cy.get('[data-testid="cadastrar"]').click();
  })
})