/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line @next/next/no-img-element

import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { getLocalStorange } from '../utils/localStorage'
import { Title, SubTitle, Hero } from './styled'
import { motion } from 'framer-motion'

interface Button {
  title: string
  url: string
  target: string
}

interface Buttons {
  button: Button
}

interface Hero {
  title: string
  sub_title: string
  buttons: Buttons
}

interface Home {
  hero: Hero
}

const Home: NextPage = () => {
  const [home, setHome] = useState<Home>()
  useEffect(() => {
    const configRequest = {
      method: 'get',
      url: `${process.env.API_BASEURL}/wp-json/v1/api/page/${
        window.location.pathname == '/' ? 'home' : window.location.pathname
      }`,
      headers: {
        Authorization: `Bearer ${getLocalStorange('token')}`,
      },
    }

    async function requestAPI() {
      try {
        const response = await axios(configRequest)
        setHome(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    requestAPI()
  }, [])

  return (
    <>
      <Head>
        <title>website - Home</title>
      </Head>

      <Hero className="hero relative overflow-hidden">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-5 gap-4 min-h-screen flex justify-center items-center py-16">
            <motion.div
              className="col-span-5 xl:col-span-3 2xl:col-span-4 z-20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <Title
                dangerouslySetInnerHTML={{ __html: home?.hero.title }}
              ></Title>

              <SubTitle
                dangerouslySetInnerHTML={{ __html: home?.hero.sub_title }}
              ></SubTitle>

              <div className="mt-12 flex flex-col md:flex-row gap-7">
                {home?.hero.buttons.map((button, index) => (
                  <a
                    key={index}
                    // className="mr-7 button-primary text-white font-bold text-3xl py-6 px-11"
                    className="button-primary-light font-bold text-lg sm:text-lg 2xl:text-3xl py-3 2xl:py-6 px-8 2xl:px-11"
                    href={button?.button.url}
                    target={button?.button.target}
                  >
                    {button?.button.title}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.img
              className="absolute top-0 left-0 xl:left-1/4 w-full min-h-screen h-full object-cover object-right "
              id={home?.hero.image.ID}
              src={home?.hero.image.sizes.xl}
              alt={home?.hero.image.alt}
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            />
          </div>
        </div>
      </Hero>
    </>
  )
}

export default Home
