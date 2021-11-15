const { GetUserService } = require('../services/GetUserService');

class GetUserController {
	handle(data) {
		const service = new GetUserService();

		if(!data.id) {
			return {
				statusCode: 400,
				body: {
					error: 'Missing id'
				}
			}
		}

		return service.execute(data.id);
	}
}

module.exports = { GetUserController };
