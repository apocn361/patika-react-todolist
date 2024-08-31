import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: true,
    },
  ]);

  const onChange = (id) => {
    const cloneTodos = [...todos];

    const itemIndex = cloneTodos.findIndex((todo) => todo.id === id);

    const item = todos[itemIndex];

    item.completed = !item.completed;

    setTodos(cloneTodos);
  };

  const deleteTodo = (id) => {
    const cloneTodos = [...todos];

    const itemIndex = cloneTodos.findIndex((todo) => todo.id === id);

    cloneTodos.splice(itemIndex, 1);

    setTodos(cloneTodos);
  };

  const [filter, setFilter] = useState("all");

  const values = {
    todos,
    setTodos,
    deleteTodo,
    onChange,
    filter,
    setFilter,
  };

  return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  const context = useContext(TodoContext);

  if (context === undefined) {
    throw new Error(
      "useTodo hook must be called inside TodoProvider component"
    );
  }

  return context;
};
