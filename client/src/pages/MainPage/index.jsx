import React, { useState, useContext, useCallback, useEffect } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import "./MainPage.sass";
import cn from "classnames";

const Mainpage = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const { userId } = useContext(AuthContext);

  const getTodos = useCallback(async () => {
    try {
      await axios
        .get("/api/todo/", {
          headers: {
            "Content-Type": "application/json",
          },
          params: { userId },
        })
        .then((res) => {
          setTodos(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, [userId]);

  const createTodo = useCallback(async () => {
    if (!text) { return }

    try {
      await axios
        .post(
          "/api/todo/addTodo",
          { text, userId },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
        .then((res) => {
          setTodos([...todos, res.data]);
          setText("");
          getTodos();
        });
    } catch (error) {
      console.error(error);
    }
  }, [text, userId, todos, getTodos]);

  const removeTodo = useCallback(
    async (id) => {
      try {
        await axios
          .delete(
            `/api/todo/deleteTodo/${id}`,
            { id },
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          )
          .then(() => getTodos());
      } catch (error) {
        console.error(error);
      }
    },
    [getTodos],
  );

  const completedTodo = useCallback(
    async (id) => {
      try {
        await axios
          .put(
            `/api/todo/completedTodo/${id}`,
            { id },
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          )
          .then((res) => {
            setTodos([...todos], res.data);
            getTodos();
          });
      } catch (error) {
        console.error(error);
      }
    },
    [setTodos, getTodos, todos],
  );

  const importantTodo = useCallback(
    async (id) => {
      try {
        await axios
          .put(
            `/api/todo/importantTodo/${id}`,
            { id },
            {
              headers: {
                "Content-Type": "application/json",
              },
            },
          )
          .then((res) => {
            setTodos([...todos], res.data);
            getTodos();
          });
      } catch (error) {
        console.error(error);
      }
    },
    [setTodos, getTodos, todos],
  );

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  return (
    <div className="container flex f-column f-center mt-6">
      <div className="w400">
        <h4 className="is-size-3 has-text-centered">Add Todo</h4>
        <form>
          <input
            className="input is-rounded"
            type="text"
            id="text"
            value={text}
            name="input"
            placeholder="Todo name"
            onChange={(e) => setText(e.target.value)}
          />

          <button
            type="button"
            className="button mt-4 boxed is-rounded is-primary bold-500"
            onClick={createTodo}
          >
            Add
          </button>
        </form>

        <div className="todos mt-6">
          <h4 className="is-size-3 has-text-centered mb-2">Active Todos</h4>

          {todos.map((todo, index) => {
            return (
              <div
                className="todos__item flex f-center f-space mb-2"
                key={index}
              >
                <div
                  className={cn("flex f-center", {
                    "has-text-primary": todo.important,
                  })}
                >
                  <div className="mr-3">{index + 1}</div>

                  <div
                    className={cn("todos__todo", {
                      "completed": todo.completed,
                      "bold-500": todo.important,
                    })}
                  >
                    {todo.text}
                  </div>
                </div>

                <div className="flex">
                  <span
                    className="mr-1 icon is-medium"
                    onClick={() => completedTodo(todo._id)}
                  >
                    <span className="mdi mdi-24px mdi-check-bold pointer has-text-success"></span>
                  </span>

                  <span
                    className="mr-1 icon is-medium"
                    onClick={() => importantTodo(todo._id)}
                  >
                    <span className="mdi mdi-24px mdi-alert pointer has-text-warning"></span>
                  </span>

                  <span
                    className="icon is-medium"
                    onClick={() => removeTodo(todo._id)}
                  >
                    <span className="mdi mdi-24px mdi-delete pointer has-text-black"></span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
