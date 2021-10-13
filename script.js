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

const dataReducer = (data) => {
	const result = data.reduce((acumulator, station) => {
		let metroLine = station._linha;
		Object.keys(acumulator).includes(metroLine)
			? (acumulator[metroLine] = [...acumulator[metroLine], station])
			: (acumulator[metroLine] = [station]);

		return acumulator;
	}, {});

	return result;
};

const orderData = async () => {
	const stationsData = await getData();
	if (!stationsData) {
		console.log("erro na aquisição dos dados");
		return;
	}

	const reducedData = dataReducer(stationsData.estacoes.estacao);

	console.log("resultado: ", reducedData);
};

orderData();
