import Link from "next/link";
import { memo } from "react";
import { useStore } from "../store/useStore";

function TodoList() {
  const { todos } = useStore();
  return (
    <ol className="list-decimal px-4 mt-5">
      {/* we dont want any here because its already have the types */}
      {todos.map((todo, index: number) => (
        <Link href={`${index}`} key={index}>
          <li className="px-1 py-1">{todo.name}</li>
        </Link>
      ))}
    </ol>
  );
}

export default memo(TodoList);
