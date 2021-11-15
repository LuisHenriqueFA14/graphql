const { GetAllUsersService } = require('../services/GetAllUsersService');

class GetAllUsersController {
	handle() {
		const service = new GetAllUsersService();

		return service.execute();
	}
}

module.exports = {  GetAllUsersController };
