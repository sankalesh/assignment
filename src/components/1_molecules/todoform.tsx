
import React, { memo, useState } from 'react'
import { useStore } from '../store/useStore';

function TodoForm() {

    // we have to define both in store like go to useStore line no 31,32 and 40
    // we have store all this values inside the store line no 20 interface 
    const { input, setInput, addTodo } = useStore();

    return (
        <div className='flex flex-row gap-2'>
            <input
                type="text"
                className={`${input ? "border-4 border-indigo-200 border-b-indigo-500" : "border border-zinc-700"} `}
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />

            <button
                className='bg-blue-500 disabled:bg-gray-200 disabled:cursor-not-allowed text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
                disabled={input.length === 0}
                onClick={addTodo}
                >Add</button>
        </div>
    )
}
// we are using memo over because say that this page is not dependant by-default
export default memo(TodoForm)


