import { useState } from "react"

type DataComponentProps = {
  data: {
    items: {
      id: string
      name: string
      description: string
    }[]
  }
}

export default function DataComponent({ data }: DataComponentProps) {

  const [clickedItemId, setClickedItemId] = useState<string | null>(null)

  const handleOnClick = (itemId: string) => {
    setClickedItemId(itemId === clickedItemId ? null : itemId)
  }

  return (
    <div>
      <h1 className="font-bold text-center">Accordion</h1>
      {data?.items.map((each) => (
        <button
          key={each?.id}
          className={`grid grid-cols-2 gap-4 m-5`}
        >
          <div onClick={() => handleOnClick(each?.id)} className={`bg-white hover:bg-gray-100 ${clickedItemId === each?.id ? 'border border-blue-500' : ''} text-gray-800 font-semibold py-2 px-4 rounded shadow basis-1/2`}>
            <h1 className="capitalize">{each?.name}</h1>
            {clickedItemId === each?.id && <p className="bg-gray-300 p-[2rem]">{each?.description}</p>}
          </div>
        </button>
      ))}
    </div>
  )

}
