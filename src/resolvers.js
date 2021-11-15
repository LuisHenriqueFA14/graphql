const { GetAllUsersController } = require('./controllers/GetAllUsersController');
const { GetUserController } = require('./controllers/GetUserController');
const { DeleteUserController } = require('./controllers/DeleteUserController');
const { CreateUserController } = require('./controllers/CreateUserController');

module.exports = {
	Query: {
		users: (_) => new GetAllUsersController().handle(),
		user: (_, data) => new GetUserController().handle(data),
	},

	Mutation: {
		createUser: (_, data) => new CreateUserController().handle(data),
		deleteUser: (_, data) => new DeleteUserController().handle(data),
	}
}
