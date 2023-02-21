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
        <div key={each?.id} className="grid grid-cols-2 gap-4">
         <div  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow basis-1/2">
         <h1 className="capitalize" onClick={() => handleOnClick(each?.id)}>{each?.name}</h1>
          {clickedItemId === each?.id && <p>{each?.description}</p>}
         </div>
        </div>
      ))}
    </div>
  )

}
