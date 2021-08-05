import { useRouter } from 'next/router'
import Auth from './auth'

const MainPage = () => {
  const router = useRouter()
  console.log('router', router)
  return (
    <>
      <Auth />
    </>
  )
}

export default MainPage
