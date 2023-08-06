form('templateSignUp', '../php/validationCreateAccount', 'post', 'bodySecond')

titleSignIn('titleSingUp', 'Criar uma conta', 'templateSignUp')

formBody('form', 'templateSignUp');

inputSignIn('myName', 'text', 'name', 'name', 'insira seu nome', 'form');
inputSignIn('myLastName', 'text', 'lastName', 'lastName', 'insira seu sobrenome', 'form');
inputSignIn('myEmail', 'email', 'email', 'email', 'insira seu email', 'form');
inputSignIn('myPassword', 'password', 'password', 'password', 'insira sua senha', 'form');

btnSignIn('createNewAccount', 'Enviar', 'form');