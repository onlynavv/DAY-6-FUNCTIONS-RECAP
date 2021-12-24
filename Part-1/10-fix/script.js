let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings '+login : (login == 'Director') ? 'Greetings '+login : (login == '') ? 'No login' : '';
console.log(message)