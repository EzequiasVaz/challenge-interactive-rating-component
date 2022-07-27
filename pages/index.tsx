import Head from 'next/head'
import { RatingComponent } from '../components/RatingComponent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Challenge - Interactive Rating Component</title>
        <meta name="description" content="Rating Component Challenge by Frontend Mentor" />
        <meta name="description" content="Challenge by Frontend Mentor. Coded by Ezequias Vaz." />
      </Head>
      <RatingComponent />
    </>
  )
}