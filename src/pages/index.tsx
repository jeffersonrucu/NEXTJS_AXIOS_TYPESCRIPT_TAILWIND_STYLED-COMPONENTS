/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Title } from './styled'
import axios from 'axios'

interface Sizes {
  thumbnail: string
  medium: string
  medium_large: string
  large: string
  xl: string
  xxl: string
}

interface Image {
  ID: number
  url: string
  sizes: Sizes
}

interface Post {
  ID: number
  post_title: string
  price: string
  image: Image
  map: any
}

const header = {
  headers: {
    Authorization:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6MTAwMTMiLCJpYXQiOjE2NjI3MDkzOTEsIm5iZiI6MTY2MjcwOTM5MSwiZXhwIjoxNjYyNzEyOTkxLCJkYXRhIjp7InVzZXIiOnsiaWQiOiIxIn19fQ.XvgfWnxhDf_5G2ZVAt52DNmaDWPvUtVw1XkiFKY17mY',
  },
}

const Home: NextPage = () => {
  const [posts, setPosts] = useState<Post>()
  const [page, setPage] = useState()

  useEffect(() => {
    axios
      .get(`${process.env.API_BASEURL}/wp-json/v1/api/product`, header)
      .then((response) => {
        setPosts(response.data)
      })
  }, [])

  useEffect(() => {
    axios
      .get(`${process.env.API_BASEURL}/wp-json/v1/api/page/home`, header)
      .then((response) => {
        setPage(response.data)
      })
  }, [])

  return (
    <>
      <Head>
        <title>website - Home</title>
      </Head>

      <Title>Page</Title>

      <div dangerouslySetInnerHTML={{ __html: page?.content }}></div>

      <br />
      <hr />
      <br />

      <Title>Product</Title>

      {posts?.map((post: Post) => {
        return (
          <div key={post?.ID}>
            <p>
              ID: <span className="text-indigo-600">{post?.ID}</span>
            </p>

            <p>
              Titulo:{' '}
              <span className="text-indigo-600">{post?.post_title}</span>
            </p>

            <p>
              Valor: <span className="text-indigo-600">{post?.price}</span>
            </p>
            <br />
            <img
              src={post?.image['sizes']['medium_large']}
              alt=""
              width={100}
              height={100}
            />
            <br />
            <hr />
            <br />
          </div>
        )
      })}
    </>
  )
}

export default Home
