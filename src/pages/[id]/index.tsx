import { useStore } from '@/components/store/useStore';
import { useRouter } from 'next/router'

function DynamicTodo() {

const router = useRouter();
const id = (router.query?.id as string) || "";

const todos = useStore((s) => s.todos)

  return (
    <h1>{todos?.[id]?.name || 'Todo Not Found'}</h1>
  )
}

export default DynamicTodo