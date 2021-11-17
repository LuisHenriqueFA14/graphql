const { CreateUserService } = require('../services/CreateUserService');

class CreateUserController {
	handle(obj) {
		const service = new CreateUserService();

		if(!obj.name || !obj.email) {
			return {
				statusCode: 400,
				message: 'Missing data'
			};
		}

		return service.execute(obj.name, obj.email);
	}
}

module.exports = { CreateUserController };
