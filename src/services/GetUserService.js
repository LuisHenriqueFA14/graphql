const { DataBase } = require("../data/data");

class GetUserService {
	execute(id) {
		for(let j = 0; j <= DataBase.length; j += 1) {
			if(id == DataBase[j].id) {
				return DataBase[j];
			}
		}

		return {
			error: "User not found!"
		}
	}
}

module.exports = { GetUserService };
