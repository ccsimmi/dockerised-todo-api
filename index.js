require("dotenv").config();
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const getSwaggerDoc = require("./src/OpenAPI");
const todos = require('./src/Todos/routes.js');

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use('/api', swaggerUi.serve, swaggerUi.setup(getSwaggerDoc()));
app.use('/todo', todos)

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});
