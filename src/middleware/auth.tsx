import Router from 'next/router'
// import { setCookie } from 'typescript-cookie'

import axios from 'axios'
import { setLocalStorange } from '../utils/localStorage'

export async function setJWTToken(pathname: string) {
  const configRequest = {
    method: 'post',
    url: `${process.env.API_BASEURL}/wp-json/jwt-auth/v1/token?username=${process.env.API_USER}&password=${process.env.API_PASSWORD}`,
  }

  try {
    const response = await axios(configRequest)
    if (response.status !== 200) return false

    setLocalStorange('token', response.data.token, 86400000)
    Router.reload(pathname)
  } catch (error) {
    console.log(error)
    return false
  }
}
