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

		return service.execute(obj.id);
;
	}
}

module.exports = { GetUserController };
