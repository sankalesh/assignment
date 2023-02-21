import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import DataComponent from '@/components/dataComponent'


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