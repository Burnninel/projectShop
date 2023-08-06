

form('templateSignIn', '../php/validationLogin', 'post', 'bodyFirst', 'templateSignIn')


titleSignIn('titleSingIn', 'Acesse sua conta', 'templateSignIn')



formBody('formSignIn', 'templateSignIn');



btnSignIn('buttonSubmitForm', 'Entrar', 'templateSignIn');


inputSignIn('emailSingInContent', 'email', 'email', 'emailSingIn', 'Digite seu email', 'formSignIn');
inputSignIn('pwSingInContent', 'password', 'password', 'pwSingIn', 'Digite sua senha', 'formSignIn');
