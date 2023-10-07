import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className='deletetodo'>
                    <div className="todos collection-item" key={todo.id}>
                        <li className='todolistitems' style={{ fontSize: "20px" }}>{todo.content}</li>
                        <button className="todos-list" onClick={() => deleteTodo(todo.id)} style={{}}>
                            Delete
                        </button>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="empty center">
            <p className="nolist center">You have no todo's left</p>
        </div>
    )

    return (
        <div>
            {todoList}
        </div>
    )
}

export default Todos;
