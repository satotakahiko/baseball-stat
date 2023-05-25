import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/pages/components/Card'
import React from 'react'
import { client } from '@/lib/client'

export type Image = {
  height: number
  width: number
  url: string
}

export type Player = {
  id: string
  personId: number
  player_name: string
  group: Array<'pitching' | 'hitting'>
  league: string[]
  team: string[]
  image: Image
  createdAt: string
  updatedAt: string
  revisedAt: string
  publishedAt: string
}

export type Contents = Player[]

type Response = {
  contents: Contents
  limit: number
  offset: number
  totalCount: number
}

const inter = Inter({ subsets: ['latin'] })

const Home: React.FC<any> = ({ players }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Card players={players} />
      </main>
    </>
  )
}
export default Home

export const getStaticProps = async () => {
  const data: Response = await client.get({
    endpoint: 'player',
    queries: {
      limit: 50,
    },
  })

  return {
    props: {
      players: data.contents,
    },
  }
}
