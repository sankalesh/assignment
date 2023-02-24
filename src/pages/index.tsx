import TodoForm from "@/components/1_molecules/todoform";
import TodoList from "@/components/1_molecules/todoList";
import React from "react";

export default function Home() {

  return (
    <div className="flex items-stretch">
      <div className="mx-auto py-4 px-10 self-center">
        <h1 className="font-extrabold text-4xl mb-6">Todo</h1>

        <TodoForm />

        <TodoList />
      </div>
    </div>
  );
}

