const { DataBase } = require("../data/data");

class GetAllUsersService {
	execute() {
		return DataBase;
	}
}

module.exports = { GetAllUsersService };
