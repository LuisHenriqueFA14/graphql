const { CreateUserService } = require('../services/CreateUserService');

class CreateUserController {
	handle(data) {
		const service = new CreateUserService();

		if(!data.name || !data.email) {
			return {
				statusCode: 400,
				message: 'Missing data'
			};
		}

		return service.execute(data.name, data.email);
	}
}

module.exports = { CreateUserController };
