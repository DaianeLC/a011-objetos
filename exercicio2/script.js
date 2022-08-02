const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

console.log('primeiro ator/atriz', filme.elenco[1]);
console.log('ultimo ator/atriz', filme.elenco[3]);
console.log("array com todas as transmissões de hoje", filme.transmissoesHoje);
console.log("horário de transmissão do filme no Canal Brasil", filme.transmissoesHoje[1].horario)

// lembrar de sempre colocar o comentario do que você esta imprimindo