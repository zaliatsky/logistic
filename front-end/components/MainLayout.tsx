import Head from 'next/head'
import Navigation from './navigation/Navigation'
const blabla = ''
const MainLayout = ({ children, title = '' }) => {
  return (
    <>
      <Head>
        <title>Hotel Network App | {title}</title>
      </Head>
      <Navigation />
      <main>{children}</main>
    </>
  )
}

export default MainLayout
