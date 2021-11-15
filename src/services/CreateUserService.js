const { DataBase } = require("../data/data");
const { v4: uuid } = require("uuid");

class CreateUserService {
	execute(name, email) {
		for(let j = 0; j <= DataBase.length; j += 1) {
			if(email == DataBase[j].email) {
				return {
					error: "Email already in use",
				}
			}
		}

		const user = {
			name,
			email,
			id: uuid()
		}

		DataBase.push(user);

		return user;
	}
}

module.exports = { CreateUserService };
