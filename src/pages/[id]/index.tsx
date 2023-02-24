import { useRouter } from 'next/router'
import axios from "axios"
import { FoodData } from '@/components/types/todoListData';
import Image from "next/image"


interface NutritionData {
  foods: FoodData[];
}


function Nutritional({ x }: any) {

  const router = useRouter();
  const { index } = router.query;
  const food = x.foods[0];
  // console.log(food.photo);

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className='justify-items-center'>
        <Image src={food.photo.highres} alt='Food Image' width={500} height={500} />
      </div>
      <div className="px-4 mt-5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-md text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr className='border-gray-200 dark:border-gray-700'>
              <th className="border px-4 py-2 font-bold">Nutrition</th>
              <th className="px-6 py-3 bg-gray-200 dark:bg-gray-500 text-center">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-gray-200 dark:border-gray-700'>
              <td className="border px-4 py-2 font-bold">Food Name</td>
              <td className="px-6 py-3 bg-gray-50 dark:bg-gray-500 text-center">{food.food_name}</td>
            </tr>
            <tr className='border-gray-200 dark:border-gray-700'>
              <td className="border px-4 py-2 font-bold">Serving Weight (g)</td>
              <td className="border-gray-200 px-6 py-3 bg-gray-50 dark:bg-gray-500 text-center">{food.serving_weight_grams} g</td>
            </tr>
            <tr className='border-gray-200 dark:border-gray-700'>
              <td className="border px-4 py-2 font-bold">Calories</td>
              <td className="border-gray-200 px-6 py-3 bg-gray-50 dark:bg-gray-500 text-center">{food.nf_calories} Cal</td>
            </tr>
            <tr className='border-gray-200 dark:border-gray-700'>
              <td className="border px-4 py-2 font-bold">Total Fat</td>
              <td className="border-gray-200 px-6 py-3 bg-gray-50 dark:bg-gray-500 text-center">{food.nf_total_fat} g</td>
            </tr>
            <tr className='border-gray-200 dark:border-gray-700'>
              <td className="border px-4 py-2 font-bold">Saturated Fat</td>
              <td className="border-gray-200 px-6 py-3 bg-gray-50 dark:bg-gray-500 text-center">{food.nf_saturated_fat} g</td>
            </tr>
            <tr className='border-gray-200 dark:border-gray-700'>
              <td className="border px-4 py-2 font-bold">Total Carbohydrate</td>
              <td className="border-gray-200 px-6 py-3 bg-gray-50 dark:bg-gray-500 text-center">{food.nf_total_carbohydrate} g</td>
            </tr>
            <tr className='border-gray-200 dark:border-gray-700'>
              <td className="border px-4 py-2 font-bold">Sugars</td>
              <td className="border-gray-200 px-6 py-3 bg-gray-50 dark:bg-gray-500 text-center">{food.nf_sugars} g</td>
            </tr>
            <tr className='border-gray-200 dark:border-gray-700'>
              <td className="border px-4 py-2 font-bold">Protein</td>
              <td className="border-gray-200 px-6 py-3 bg-gray-50 dark:bg-gray-500 text-center">{food.nf_protein} g</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Nutritional;


export async function getServerSideProps(context) {
  var input = JSON.stringify({
    query: context.params.id,
  });

  var config = {
    method: 'POST',
    headers: { "content-type": "application/json" },
    url: 'http://localhost:5000/api/nutrition',
    data: input,
  };
  console.log(config.data);
  const response = await axios(config);
  const x = response.data
  return {
    props: { x }
  };
}