import Login from './login'
import Game from './game'
import { useAuth } from '../front-end/helpers/auth'

const MainPage = () => {
  const { token } = useAuth()
  console.info('TOKEN', token)

  return token ? <Game /> : <Login />
}

export default MainPage
