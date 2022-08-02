const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};
console.log('Original', pokemon1)

//A
const copiaPokemon1 = {...pokemon1}
copiaPokemon1.nome = "Squirtle"
copiaPokemon1.tipo = "Água"
//console.log("Alterações de nome e tipo",copiaPokemon1)
//console.log('Cópia do objeto pokemon1' , copiaPokemon1,) <== não precisa manter a copia impressa no console isso vai te confundir 

//B

 
const ataques = []
        
const arrayItens ={
        nome: "Investida",
        dano:  40,
        tipo: "Normal",
        precisao: 100
    }
ataques.push(arrayItens)
pokemon1.ataques = arrayItens
console.log('com a inclusão dos ataques' ,pokemon1)







//const ataqueTest = []
//const arrayAtaqueTest = {
    //nome: "investida",
    //dano: 30,
    //precisao: 300

//ataqueTest.push(arrayAtaqueTest{arrayAtaqueTest})
//console.log(ataqueTest)

