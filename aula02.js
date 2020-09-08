const json = require("./json")

let organizacao = "Peshop Node";

var pets = [
    {nome: "Louis",
     tipo: "gato",
     raca: "SRD",
     idade: 7,
     genero: "masculino",
     vacinado: true,
     servicos: []
    },
    {nome: "Baldochi",
    tipo: "cachorro",
    raca: "SRD",
    idade: 11,
    genero: "masculino",
    vacinado: false,
    servicos: []
    },
    {nome: "Vandame",
    tipo: "cachorro",
    raca: "SRD",
    idade: 13,
    genero: "masculino",
    vacinado: true,
    servicos: []
    }
];

function validaDados (arrayPet){
    return (arrayPet.nome && arrayPet.tipo && arrayPet.raca && arrayPet.idade && arrayPet.genero && typeof arrayPet.vacinado == "boolean")
}

function verificaVacina (nomePet){
    for (var i=0; i < pets.length; i++){
        if (pets[i].nome == nomePet){
            console.log ("Status da vacina do " + pets[i].nome + ": " + pets[i].vacinado)
        }
    }
    
}

//verificaVacina ("Louis")

function addPet(arrayPet){
    if (typeof arrayPet == "object"){
        if (validaDados (arrayPet)){
            pets.push(arrayPet);
        }
        else{
            console.log ("não possui todos os parametros necessarios")
        }
    }
    else{
        console.log ("tipo do objeto inválido")
    }
   
}

/*  addPet ({nome:"teste2", 
        tipo: "gato",
        raca: "teste",
        idade: 55, 
        genero: "mteste",
        vacinado: true}) */



/* for (var i=0; i < pets.length; i++){
    console.log("Nome: " + pets[i].nome);
    console.log("Tipo: " + pets[i].tipo);
} */

function banho(pet){
    console.log("O pet "+ pet.nome + " tomou banho.");
    pet.servicos.push("banho")
}

function tosar(pet){
    console.log("O pet "+ pet.nome + " está tosado.");
    pet.servicos.push("tosa")
}

function servico (pet, servico){
    let existe = false;
 for (var i=0; i < pets.length; i++){
    if (pets[i].nome == pet) {
        console.log ("O pet possui cadastro. Pode realizar o serviço.");
        servico(pets[i])
        existe = true;
        console.log("Serviços: " + pets[i].servicos);
        break;
    }
} 
 if (existe == false){
    console.log ("O pet não possui cadastro. Cadastre antes de proseguir para o serviço.");
 } 
}

//servico ("Louis", banho);
//servico ("Louis", tosar);

function addPetJson(arquivo){
    let jsonConvertido = JSON.parse(arquivo)
    pets.push(...jsonConvertido);
    console.log (pets);
}

addPetJson (json)