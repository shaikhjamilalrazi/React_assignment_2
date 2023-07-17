import { useState } from "react";
import styles from "./Todo.module.css";

export default function Todo() {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = (e) => {
        e.preventDefault();
        if (task.trim() !== "") {
            setTaskList([...taskList, task]);
            setTask("");
        }
    };

    const handleDeleteTask = (index) => {
        setTaskList(taskList.filter((_, i) => i !== index));
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleAddTask}>
                <input
                    type="text"
                    value={task}
                    onChange={handleTaskChange}
                    placeholder="Enter a new task"
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>
                    Add Task
                </button>
            </form>

            <ul className={styles.taskList}>
                {taskList.map((task, index) => (
                    <li key={index} className={styles.taskItem}>
                        <span className={styles.taskText}>{task}</span>
                        <button
                            onClick={() => handleDeleteTask(index)}
                            className={styles.deleteButton}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
