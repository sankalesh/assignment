
import DataComponent from '@/components/1_molecules/dataComponent'


type DataComponentProps = {
  data: {
    items: {
      id: string
      name: string
      description: string
    }[]
  }
}
export default function Home({data}:DataComponentProps) {
  return (
    <>
     <DataComponent data={data} />
    </>
  )
}

export async function getServerSideProps(){
  const response = await fetch('https://api.github.com/search/repositories?q=react');
  const data = await response.json();
  return{
    props:{data}
  }
}