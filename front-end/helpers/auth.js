import { useCallback, useEffect, useState } from 'react'

const userStorageName = 'user'

export const useAuth = () => {
  const [token, setToken] = useState(null)

  const login = useCallback((token) => {
    console.log('here we set token', token)
    setToken(token)
    localStorage.setItem(userStorageName, token)
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    localStorage.removeItem(userStorageName)
  })

  useEffect(() => {
    const token = localStorage.getItem(userStorageName)

    if (token) {
      login(token)
    }
  }, [login])

  return {
    login,
    logout,
    token,
  }
}
