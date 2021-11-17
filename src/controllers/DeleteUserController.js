const { DeleteUserService } = require('../services/DeleteUserService');

class DeleteUserController {
	handle(obj) {
		const service = new DeleteUserService();

		if(!obj.id) {
			return {
				statusCode: 400,
				message: 'Missing id'
			};
		}

		return service.execute(obj.id);
	}
}

module.exports = { DeleteUserController };
