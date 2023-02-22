import Todoform from "@/components/1_molecules/todoform";
import { link } from "fs";
import React, { useState } from "react";

export default function Home() {
  const [todos, setTodos] = useState<any>([
    {
      name: "Todo 1",
      isCompleted: false,
    },
    {
      name: "Todo 1",
      isCompleted: false,
    },
    {
      name: "Todo 1",
      isCompleted: false,
    },
  ]);

 
  return (
    <div className="px-10">
      <h1>Today</h1>

      <Todoform setTodos={setTodos}/>

      <ol className="list-decimal">
        {todos.map((todo: any, index: number) => (
          <li key={index}>{todo.name}</li>
        ))}
      </ol>
    </div>
  );
}
