import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Title } from './styled'
import axios from 'axios'

interface Post {
  completed: boolean
  id: number
  title: string
  userId: number
}

const Home: NextPage = () => {
  const [post, setPost] = useState<Post>()

  useEffect(() => {
    axios.get(`${process.env.API_BASEURL}/todos/1`).then((response) => {
      setPost(response.data)
    })
  }, [])

  return (
    <>
      <Head>
        <title>website - Home</title>
      </Head>
      <Title>API</Title>
      <p>
        Title: <span className="text-indigo-600">{post?.title}</span>
      </p>
      <p>
        ID: <span className="text-indigo-600">{post?.id}</span>
      </p>
      <p>
        Completed:{' '}
        <span className="text-indigo-600">
          {post?.completed ? 'true' : 'false'}
        </span>
      </p>
      <p>
        User ID: <span className="text-indigo-600">{post?.userId}</span>
      </p>
    </>
  )
}

export default Home
