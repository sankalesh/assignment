import { useState } from "react";

type DataComponentProps = {
  data: {
    items: {
      id: string;
      name: string;
      description: string;
    }[];
  };
};

export default function DataComponent({ data }: DataComponentProps) {

  const [clickedItemId, setClickedItemId] = useState<string | null>(null);

  const handleOnClick = (itemId: string) => {
    setClickedItemId(itemId === clickedItemId ? null : itemId);
  };

  return (
    <div>
      <h1 className="font-bold text-center">Accordion</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        {data?.items.map((item) => (
          <button key={item?.id} >
            <div
              onClick={() => handleOnClick(item?.id)}
              className={`bg-white hover:bg-gray-100 ${clickedItemId === item?.id ? "border border-blue-500" : ""
                } text-gray-800 font-semibold py-2 px-4 rounded shadow basis-1/2`}
            >
              <h1 className="capitalize">{item?.name}</h1>
              {clickedItemId === item?.id && (
                <p className="bg-gray-300 p-[2rem]">{item?.description}</p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
