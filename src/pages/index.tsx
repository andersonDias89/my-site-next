import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { InitialPage } from '../components/InitialPage'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Anderson Dias | Meu web site</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <InitialPage />
    </>
  )
}

export default Home

// export function getServerSideProps() {
//   return {
//     props: {
      
//     },
//   }
// }
