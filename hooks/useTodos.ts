import { useReducer } from "react";

type Task = {
  id: number;
  text: string;
  done: boolean;
};

type Action =
  | { type: "ADD"; payload: string }
  | { type: "TOGGLE"; payload: number }
  | { type: "REMOVE"; payload: number };

function reducer(state: Task[], action: Action): Task[] {
  
  /* Lisää uusi task */
  if (action.type === "ADD") {
    const newTask: Task = {
      id: Date.now(),
      text: action.payload,
      done: false,
    };

    return [...state, newTask];
  }

  /* Vaihda done / undone */
  if (action.type === "TOGGLE") {
    return state.map((task) => {
      if (task.id === action.payload) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });
  }

  /* Poista taski */
  if (action.type === "REMOVE") {
    return state.filter((task) => {
      return task.id !== action.payload;
    });
  }

  return state;
}

export function useTodos() {
  const [todos, dispatch] = useReducer(reducer, []);

  /* Lisää */
  function addTodo(text: string) {
    dispatch({
      type: "ADD",
      payload: text,
    });
  }

  /* Vaihda done / undone  */
  function toggleTodo(id: number) {
    dispatch({
      type: "TOGGLE",
      payload: id,
    });
  }

  /* Poista */
  function removeTodo(id: number) {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  }

  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
  };
}