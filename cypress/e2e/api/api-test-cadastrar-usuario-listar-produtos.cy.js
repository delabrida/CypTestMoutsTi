describe('API ServeRest - CADASTRAR NOVO USUARIO E LISTAR PRODUTOS', () => {
  

  it('Cadastrar novo usuário e listar produtos cadastrados', () => {
    // Requisição 1: Cadastrar novo usuário
    cy.request({
      method: 'POST',
      url: '/usuarios',
      body: {
        nome: 'jose maria',
        email: 'josemariaj@gmail.com',
        password: 'j123m321',
        administrador: 'false',
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
    });

    // Requisição 2: Listagem de produtos cadastrados
    cy.request('GET', '/produtos').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.produtos).to.be.an('array');
    });
  });
});