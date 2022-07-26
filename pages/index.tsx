import Head from 'next/head'
import { RatingComponent } from '../components/RatingComponent'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Challenge - Interactive Rating Component</title>
        <meta name="description" content="Rating Component Challenge by Frontend Mentor" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
      <RatingComponent />
    </div>
  )
}