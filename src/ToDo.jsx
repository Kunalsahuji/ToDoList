function Todo({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <div className="todoInputs" style={{ textDecoration: todo.completed ? "line-through" : "" }}>
      {todo.text}
      <button onClick={() => toggleTodo(index)}>
        {todo.completed ? "Undo" : "Complete"}
      </button>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default Todo;