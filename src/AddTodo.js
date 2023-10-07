import React, { useState, useEffect } from 'react';
import { v1 as uuid } from 'uuid';

const AddTodo = ({ addTodo, initialTodoState }) => {
    const [newTodo, setNewTodo] = useState({ id: 0, content: "" });

    useEffect(() => {
        setNewTodo({ ...newTodo, ...initialTodoState });
    }, [initialTodoState]);

    const handleChange = (e) => {
        let newDataTodo = { ...newTodo };
        newDataTodo[e.currentTarget.name] = e.currentTarget.value;
        setNewTodo(newDataTodo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newTodo.id = uuid();
        newTodo.content = newTodo.content.replace(/^\w/, c => c.toUpperCase());
        addTodo(newTodo);
        setNewTodo({ id: 0, content: "" });
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input className="input" placeholder="Add your task here" type="text" name="content" onChange={handleChange}
                    value={newTodo.content} maxLength={60} />
                <button className='addButton'>
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddTodo;
