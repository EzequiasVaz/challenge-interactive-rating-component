import Head from 'next/head'
import { RatingComponent } from '../components/RatingComponent'

export default function Home() {
  return (
    <>
      <Head>
        <title>Challenge - Interactive Rating Component</title>
        <meta name="description" content="Rating Component Challenge by Frontend Mentor" />
        <meta name="description" content="Challenge by Frontend Mentor. Coded by Ezequias Vaz." />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <RatingComponent />
    </>
  )
}