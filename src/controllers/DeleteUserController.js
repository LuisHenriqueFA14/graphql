const { DeleteUserService } = require('../services/DeleteUserService');

class DeleteUserController {
	handle(data) {
		const service = new DeleteUserService();

		if(!data.id) {
			return {
				statusCode: 400,
				message: 'Missing id'
			};
		}

		return service.execute(data.id);
	}
}

module.exports = { DeleteUserController };
