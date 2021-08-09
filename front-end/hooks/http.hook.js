import { useState, useCallback } from 'react'

export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [requestError, setRequestError] = useState(null)

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true)
      try {
        if (body) {
          body = JSON.stringify(body)
          headers['Content-Type'] = 'application/json'
        }

        const response = await fetch(url, { method, body, headers })
        const data = await response.json()
        console.log('here is response and data in request', response, data)

        if (!response.ok)
          throw new Error(data.message || 'Something went wrong')
        setLoading(false)

        return data
      } catch (e) {
        setLoading(false)
        setRequestError(e.message)
        throw e
      }
    },
    []
  )

  const clearErrors = () => setRequestError(null)

  return { loading, request, requestError, clearErrors }
}
