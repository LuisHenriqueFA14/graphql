const { DataBase } = require("../data/data");

class DeleteUserService {
	execute(id) {
		for(let j = 0; j <= DataBase.length; j += 1) {
			if(id == DataBase[j].id) {
				DataBase.pop(j);
				return {
					message: "User deleted successfully!"
				}
			}
		}

		return {
			error: "User not found!"
		}
	}
}

module.exports = { DeleteUserService };
