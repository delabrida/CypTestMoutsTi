**********CENARIOS PLATAFORMA SERVER REST**********

Funcionalidade: Cadastro na plataforma Sever Rest

CT01: CADASTRAR NOVO USUARIO COM SUCESSO

Passos:
1. Usuário acessa a página de cadastro;
2. Usuário preenche o campo 'nome';
3. Usuário preenche o campo 'e-mail';
4. Usuário preenche o campo 'senha';
5. Usuário aciona comando 'Cadastrar'

Resultado esperado:
O sistema realiza o cadastro com sucesso.

Regra de negócio:
Campos obrigatórios para o cadastro.

----------------------------------------------
CT02-VALIDAR OBRIGATORIEDADE DE CAMPOS DURANTE O CADASTRO

Passos:
1. Usuário acessa a página de cadastro;
2. Usuário não informa os campos obrigatórios (nome, e-mail e senha);
3. Usuário aciona comando 'Cadastrar'

Resultado esperado:
1. O sistema não realiza o cadastro;
2. O sistema exibem mensagem para cada campo obrigatório não preenchido.

Regra de negócio:
Campos obrigatórios para o cadastro.

----------------------------------------------

CT03-CADASTRAR NOVO USUARIO ADMINISTRADOR

Passos:
1. Usuário acessa a página de cadastro;
2. Usuário preenche o campo 'nome';
3. Usuário preenche o campo 'e-mail';
4. Usuário preenche o campo 'senha';
4. Marcar checkbox 'Cadastrar como administrador?'
5. Usuário aciona comando 'Cadastrar'

Resultado esperado:
O sistema realiza o cadastro de um usuário administrador com sucesso.

Regra de negócio:
Campos obrigatórios para o cadastro.

-------------------------------------------------

**********CENÁRIOS DE APIs**********


CENARIO: CADASTRAR NOVO USUARIO E LISTAR PRODUTOS

Descrição: Realiza o cadastro de uma novo usuário 