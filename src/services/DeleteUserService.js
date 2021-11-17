const { DataBase } = require("../data/data");

class DeleteUserService {
	execute(id) {
		for(let j = 0; j <= DataBase.length; j += 1) {
			if(id == DataBase[j].id) {
				DataBase.pop(j);
				return {
					type: "message",
					content: "User deleted successfully!"
				}
			}
		}

		return {
			type: "error",
			content: "User not found!"
		}
	}
}

module.exports = { DeleteUserService };
