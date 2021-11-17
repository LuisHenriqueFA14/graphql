const { GetUserService } = require('../services/GetUserService');

class GetUserController {
	handle(obj) {
		const service = new GetUserService();

		if(!obj.id) {
			return {
				statusCode: 401,
				user: null,
				id: null,
				email: null,
			}
		}

		const result = service.execute(obj.id);

		console.log(result);

		return result;
	}
}

module.exports = { GetUserController };
