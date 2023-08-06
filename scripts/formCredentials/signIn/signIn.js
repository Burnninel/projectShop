form('templateSignIn', '../php/validationLogin', 'post', 'bodyFirst', 'templateSignIn')

titleForm('titleSingIn', 'Acesse sua conta', 'templateSignIn')

formBody('formSignIn', 'templateSignIn');

btnForm('buttonSubmitForm', 'Entrar', 'templateSignIn');

inputsForms('emailSingInContent', 'email', 'email', 'emailSingIn', 'Digite seu email', 'formSignIn');
inputsForms('pwSingInContent', 'password', 'password', 'pwSingIn', 'Digite sua senha', 'formSignIn');