import type { NextPage } from 'next'
import Head from 'next/head'
import { Title } from './styled'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>website - Home</title>
      </Head>
      <Title>Hello world!</Title>
    </>
  )
}

export default Home
