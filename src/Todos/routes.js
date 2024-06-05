const express = require("express");
const router = express.Router();
const { getTodos, getOneTodo } = require("./repository");

router.get("/", async (req, res) => {
	try {
		const todos = await getTodos();
		res.json(todos);
	} catch (error) {
		console.error("Error fetching todos: ", error);
		res.send(500).json({ error: "Internal server error" });
	}
});

router.get("/:id", async (req, res) => {
	try {
		const todo = await getOneTodo(req.params.id);
        if (todo.length === 0) {
            res.status(404).json({ error: "Task not found" });
            return;
        }
		res.json(todo);
	} catch (error) {
		console.error("Error fetching todos: ", error);
		res.send(500).json({ error: "Internal server error" });
	}
});

module.exports = router;
