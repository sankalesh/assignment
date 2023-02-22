import { create } from 'zustand'

// zustand is a library which provides us create function which create store that we can access from anywhere

const INITIAL_TODO = [
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
]

interface IStore {
    todos: {
        name: string
        isCompleted: boolean
    }[],
    input: string;
    setInput: (newInput: string) => void;
    addTodo: () => void;
}

// by using this useStore we can get state also we can setState
const useStore = create<IStore>((set) => ({
    todos: INITIAL_TODO,
    input: '',

    setInput: (newInput: string) => set({
        input: newInput,
    }),

    //   addTodo function will take state from line no 34 and set that value in todos and then input will get empty
    addTodo: () => set((prevState) => ({
        // if we want going to set new todos then we want prev value 
        // so above we use call back function
        todos: [
            ...prevState.todos,
            {
                name: prevState.input,
                isCompleted: false
            }
        ],
        input: '',
    }))
}))

export { useStore }