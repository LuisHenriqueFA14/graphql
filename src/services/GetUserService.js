const { DataBase } = require("../data/data");

class GetUserService {
	execute(id) {
		for(let j = 0; j <= DataBase.length-1; j += 1) {
			if(id == DataBase[j].id) {
				return {
					statusCode: 200,
					...DataBase[j],
				}
			}
		}

		return {
			statusCode: 404,
			id: null,
			name: null,
			email: null,
		}
	}
}

module.exports = { GetUserService };
