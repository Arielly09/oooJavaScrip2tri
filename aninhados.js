const cliente = {
    nome:"João",
    idade: 24,
    email:"joao@larissa.com",
    telefone:["(41) 9999-0000", "(41) 9988-0000"],
};

cliente.edereco = {
    rua : "R. Joseph Climber",
    numero : 1337,
    apartamento : true,
    complemento : "Ap 934",
};

console.log(cliente);
console.log(cliente.endereco);
console.log(cliente["endereco"]);