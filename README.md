<h1 align="center">GraphQL</h1>
<p align="center">My first time trying <a href="https://graphql.org/">graphql</a>.</p>

## Project

The project is very simple.

There is an array (of users), and with GraphQL you can:

- List all users
- List user info
- Create an user
- Delete an user

The project is using:
- `graphql`: for graphql.
- `express-graphql/express`: to run the graphql server.
- `uuid`: to generate the user ID.

## How to use it

After download, run this command to install the dependencies:
```
npm i
```
Then, run the development environment:
```
npm run dev
```
And access http://localhost:4000/graphql to GraphiQL page.

<br>

But if you want to run it as an API, then run this command:
```
npm run start
```

## GraphQL info

The schema is basically:

- Query:
	- users                    (to list all users)
	- user(id)                 (to get user info)
- Mutation:
	- createUser(name, email)  (to create a new user)
	- deleteUser(id)           (to delete an user by id)

Read the schema file (`./src/schema.graphql`) for more information.
