const { GetAllUsersController } = require('./controllers/GetAllUsersController');
const { GetUserController } = require('./controllers/GetUserController');
const { DeleteUserController } = require('./controllers/DeleteUserController');
const { CreateUserController } = require('./controllers/CreateUserController');

module.exports = {
	Query: {
		users: new GetAllUsersController().handle,
		user: new GetUserController().handle,
	},

	Mutation: {
		createUser: new CreateUserController().handle,
		deleteUser: new DeleteUserController().handle,
	}
}

