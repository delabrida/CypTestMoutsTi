describe('API ServeRest - VALIDAR CADASTRO COM EMAIL DUPLICADO', () => {
  const emailDuplicado = 'josemariaj@gmail.com'; // e-mail já existente na base

  it('Validar cadastro com e-mail duplicado', () => {
    // ---- Requisição: Cadastro com e-mail duplicado ----
    cy.request({
      method: 'POST',
      url: '/usuarios',
      body: {
        nome: 'jose maria',
        email: emailDuplicado,
        password: 'j123m321',
        administrador: 'false',
      },
      failOnStatusCode: false, // Permite que a requisição não falhe o teste automaticamente
    }).then((response) => {
      // Testes dentro da requisição de e-mail duplicado
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property('message', 'Este email já está sendo usado');
    });
  });
});