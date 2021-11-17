const { DataBase } = require("../data/data");

class DeleteUserService {
	execute(id) {
		for(let j = 0; j <= DataBase.length-1; j += 1) {
			if(id == DataBase[j].id) {
				DataBase.pop(j);
				return {
					statusCode: 200,
					message: "User deleted successfully!"
				}
			}
		}

		return {
			statusCode: 404,
			message: "User not found!"
		}
	}
}

module.exports = { DeleteUserService };
