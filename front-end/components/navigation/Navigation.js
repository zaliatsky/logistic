import Link from 'next/link'
import navigationParams from '../../variables/nav'
import navStyles from './navigation.module.scss'
import userStore from '../../stores/user'
import { useRouter } from 'next/router'

const Navigation = () => {
  const router = useRouter()
  const logout = () => {
    userStore.logout()
    router.push('/')
  }

  return (
    <nav className={navStyles.navigation}>
      <div className={navStyles.navigationLinks}>
        {navigationParams.map(({ title, url }) => {
          return (
            <Link href={url} key={title}>
              <a className={navStyles.navigationLink}>{title}</a>
            </Link>
          )
        })}
      </div>
      <span className={navStyles.navigationLink} onClick={logout}>
        logout
      </span>
    </nav>
  )
}

export default Navigation
