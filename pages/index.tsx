import Auth from './auth'
import { NotificationContainer } from 'react-notifications'

const MainPage = () => {
  return (
    <>
      <Auth />
      <NotificationContainer />
    </>
  )
}

export default MainPage
