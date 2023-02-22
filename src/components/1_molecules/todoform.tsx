import React, { memo,useState } from 'react'

function Todoform({setTodos}) {

    const [input, setInput] = useState<string>("");

    return (
        <div>

            <input
                type="text"
                className="border-2 border-grey-300 rounded-md"
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />

            <button onClick={() => {
                setTodos((todos)=>[...todos, { name: input, isCompleted: false }]);
                setInput('');
            }}>Add</button>
        </div>
    )
}
// we are using memo over because say that this page is not dependant by-default
export default memo(Todoform)