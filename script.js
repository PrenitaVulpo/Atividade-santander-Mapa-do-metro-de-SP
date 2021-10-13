const getData = async () => {
	try {
		const response = await fetch(
			"https://private-3923c4-santandercoders809.apiary-mock.com/stations",
		);
		const stations = await response.json();
		return stations;
	} catch (error) {
		console.log(`Error ${error.name}: `, error.message);
	}
};

// {
// 	"_estacaoId": "152",
// 	"_nome": "Ana Rosa",
// 	"_ordem": "01",
// 	"_linhaId": "1",
// 	"_linha": "1-Azul",
// 	"_tipoId": "1",
// 	"_tipo": "Metrô"
// },

const dataReducer = (data) => {
	const result = data.reduce((acumulator, station) => {
		let metroLine = station._linha;
		Object.keys(acumulator).includes(metroLine)
			? (acumulator[metroLine] = [...acumulator[metroLine], station])
			: (acumulator[metroLine] = [station]);

		return acumulator;
	}, {});

	console.log(result);
};

// (pokemons) => {
// 	const pokemonLI = pokemons.reduce((acumulador, pokemon) => {
// 		let typeName = pokemon.types[0].type.name;
// 		Object.keys(acumulador).includes(typeName) ?
// 			acumulador[typeName] = [...acumulador[typeName], pokemon.name] : acumulador[typeName] = [pokemon.name];

// 		return acumulador;
// 	}, {});

const orderData = async () => {
	const stationsData = await getData();
	if (!stationsData) {
		console.log("erro na aquisição dos dados");
		return;
	}
	console.log(stationsData);
	dataReducer(stationsData.estacoes.estacao);
};

orderData();
