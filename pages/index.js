import Auth from './auth'
import { NotificationContainer } from 'react-notifications'
import Head from 'next/head'

const MainPage = () => {
  return (
    <>
      <Head>
        <title>Hotel Network App | Auth/register page</title>
      </Head>
      <Auth />
      <NotificationContainer />
    </>
  )
}

export default MainPage
