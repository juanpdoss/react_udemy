import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([
    {
      title: "ordenar",
      done: false,
    },
    {
      title: "comprar tomates",
      done: false,
    },
    {
      title: "regar plantas",
      done: false,
    },
    {
      title: "aprobar estadistica XD",
      done: false,
    },
  ]);

  return (
    <section>
      {todos.map((todo) => {
        return (
          <span className="todo-pill">
            <p>{todo.title} - </p>
            <button>Realizado</button>
          </span>
        );
      })}
    </section>
  );
}

export default Todo;
