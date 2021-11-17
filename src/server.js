const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

const fs = require('fs');
const path = require('path');

const resolvers = require("./resolvers")

const schema = buildSchema(fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8'));

const app = express();

app.use('/graphql', graphqlHTTP({
	schema: schema,
	rootValue: {...resolvers.Query, ...resolvers.Mutation},
	graphiql: process.env.GRAPHIQL === 'true',
}));

app.listen(4000, () => {
	console.log('🚀 Server is running!');
});
