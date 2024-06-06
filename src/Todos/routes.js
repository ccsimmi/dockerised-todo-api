const express = require("express");
const router = express.Router();
const { getTodos, getOneTodo, deleteTodo } = require("./repository");

router.get("/", async (req, res) => {
	try {
		const todos = await getTodos();
        if (todos.length === 0) {
            res.status(404).json({ error: "Tasks not found" });
            return;
        }
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

router.delete("/:id", async (req, res) => {
    try {
        const todo = await deleteTodo(req.params.id);
        if (todo.length === 0) {
            res.status(404).json({ error: "Task not found" });
            return;
        }
        res.sendStatus(204);

    } catch (error) {
        console.error("Error fetching todos: ", error);
		res.send(500).json({ error: "Internal server error" });
    }
})

module.exports = router;
