const pool = require("../Database/db");

async function getTodos() {
	const result = await pool.query("SELECT * FROM todos");
	return result.rows;
}

async function getOneTodo(id) {
	const result = await pool.query("SELECT * FROM todos WHERE id = $1", [id]);
	return result.rows;
}

async function deleteTodo(id) {
	const result = await pool.query(
		"DELETE FROM todos WHERE id = $1 RETURNING *",
		[id],
	);
	return result.rows;
}

module.exports = {
	getTodos,
	getOneTodo,
    deleteTodo,
};
