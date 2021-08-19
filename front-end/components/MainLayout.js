import { Fragment } from 'react'
import Head from 'next/head'
import Navigation from './navigation/Navigation'

const MainLayout = ({ children, title = '' }) => {
  return (
    <Fragment>
      <Head>
        <title>Hotel Network App | {title}</title>
      </Head>
      <Navigation />
      <main className="page__wrapper">{children}</main>
    </Fragment>
  )
}

export default MainLayout
