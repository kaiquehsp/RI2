function Cliente(nome, telefone, email, endereco) {
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;

    Object.defineProperty(this, "descricao", {
        get: function () {
            return "Informações do cliente: " + '\n' +
                '-------------------------------' + '\n' +
                'Nome: ' + this.nome + '\n' +
                '-------------------------------' + '\n' +
                'Estado: ' + this.endereco.sigla + '\n' + '\n' +
                'Cidade: ' + this.endereco.cidade + '\n' + '\n' +
                'Rua: ' + this.endereco.rua + '\n' + '\n' +
                'Número: ' + this.endereco.numero + '\n' +
                '-------------------------------' + '\n' +
                'Telefone: ' + this.telefone.ddd + ' ' + this.telefone.numero + '\n' +
                '-------------------------------' + '\n' +
                'Email: ' + this.email + '\n';
        }
    });
}

function Endereco(sigla, cidade, rua, numero) {
    this.sigla = sigla;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;
}

function Telefone(ddd, numero) {
    this.ddd = ddd;
    this.numero = numero;
}


let cliente1 = new Cliente(
    "Kaique Henrique",
    new Telefone("12", "999999999"),
    "kaique@gmail.com",
    new Endereco("SP", "São José", "Fatec", "1000")
);

let cliente2 = new Cliente(
    "Ana Beatriz",
    new Telefone("11", "999999990"),
    "ana.beatriz@email.com",
    new Endereco("SP", "São Paulo", "Av. Brigadeiro Faria Lima", "2000")
);

let cliente3 = new Cliente(
    "Jamille Oliveira",
    new Telefone("31", "999999997"),
    "jamille.oliveira@email.com",
    new Endereco("MG", "Belo Horizonte", "Rua da Liberdade", "55")
);

let cliente4 = new Cliente(
    "Juliana Mendes",
    new Telefone("41", "999999993"),
    "juliana.mendes@email.com",
    new Endereco("PR", "Curitiba", "Av. Sete de Setembro", "300")
);

let cliente5 = new Cliente(
    "Bruno Carvalho",
    new Telefone("71", "991112233"),
    "bruno.carvalho@email.com",
    new Endereco("BA", "Salvador", "Rua das Palmeiras", "789")
);


let clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];


clientes.sort((a, b) => a.nome.localeCompare(b.nome));


for (let c of clientes) {
    console.log(c.descricao);
}
