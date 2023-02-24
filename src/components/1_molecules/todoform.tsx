
import React, { memo, useState } from 'react'
import DropDown from '../0_atoms/dropDwon';
import { useStore } from '../store/useStore';

function TodoForm() {

    // we have to define both in store like go to useStore line no 31,32 and 40
    // we have store all this values inside the store line no 20 interface 

    const input = useStore(s => s.input);
    const setInput = useStore(s => s.setInput);
    const addTodo = useStore(s => s.addTodo);
    // console.log([input , setInput , addTodo])


    return (
        <div className='flex flex-row gap-2'>
            <input
                type="text"
                className={`${input ? "border-4 border-b-indigo-500" : "border border-zinc-700"} peer `}
                value={input}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <div>
                <button
                    type="button"
                    className='bg-blue-500 disabled:bg-gray-200 disabled:cursor-not-allowed text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center  peer-checked:ring-green-500 peer-checked:ring-2 peer-checked:border-transparent'
                    disabled={input.length === 0}
                    onClick={addTodo}
                >Add</button>

            </div>
            <div>
                <DropDown />
            </div>
        </div>
    )
}
// we are using memo over because say that this page is not dependant by-default
export default memo(TodoForm)


