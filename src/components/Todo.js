import React from "react";

function Todo({ todo, toggleComplete, removeTodo }) {
    function handleCheckboxClick() {
        toggleComplete(todo.id);
    }

    function handleCRemoveClick() {
        removeTodo(todo.id);
    }
    
    return (
        <div className="todo">
            <input type="checkbox" onclick={handleCheckboxClick} />
            <li
                style={{
                  textDecoration: todo.completed ? "line-through" : null
                }}
            >
                {todo.task}
            </li>
            <button onClick={handleCRemoveClick}>X</button>
        </div>
    );
}

export default Todo