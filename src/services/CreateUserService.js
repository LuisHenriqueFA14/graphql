const { DataBase } = require("../data/data");
const { v4: uuid } = require("uuid");

class CreateUserService {
	execute(name, email) {
		for(let j = 0; j <= DataBase.length-1; j += 1) {
			if(email == DataBase[j].email) {
				return {
					statusCode: 400,
					name: null,
					email: null,
					id: null,
				}
			}
		}

		const user = {
			statusCode: 200,
			name,
			email,
			id: uuid()
		}

		DataBase.push(user);

		return user;
	}
}

module.exports = { CreateUserService };
