import Link from 'next/link'
import { memo } from 'react'
import navigationParams from '../../variables/nav'
import navStyles from './navigation.module.scss'

const Navigation = memo((props) => {
  return (
    <nav className={navStyles.navigation}>
      {navigationParams.map(({ title, url }) => {
        return (
          <Link href={url} key={title}>
            <a className={navStyles.navigationLink}>{title}</a>
          </Link>
        )
      })}
    </nav>
  )
})

export default Navigation
