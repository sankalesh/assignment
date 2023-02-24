import Link from "next/link";
import { memo } from "react";
import { useStore } from "../store/useStore";

function TodoList() {
  const todos = useStore((s) => s.todos);

  const handleOnclick = (index: number) => {
    const updateTodo = [...todos]; // create a copy of todos array
    const isCompleteValues = updateTodo[index].isCompleted
    updateTodo[index] = { ...updateTodo[index], isCompleted:(!isCompleteValues) }; // update isCompleted field of clicked todo
    useStore.setState({ todos: updateTodo }); // update store with new todos array
  };

  return (
    <div className="px-4 mt-5">
      <ol className="list-decimal">
        {todos.map((todo, index: number) => (
          <div key={index} className="flex items-center mb-2">
            <div className="w-[15.7rem] mr-2">
              <Link href={`${encodeURI(todo.name)}`}>
                <li className={todo.isCompleted ? "line-through" : ""}>
                  {todo.name}
                </li>
              </Link>
            </div>
            <div>
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-green-500"
                onClick={() => handleOnclick(index)}
              />
            </div>
          </div>
        ))}
      </ol>
    </div>
  );
}

export default memo(TodoList);
