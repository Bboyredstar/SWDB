import { useState, useCallback } from 'react'
export const useHttp = () => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const cleanError = useCallback(() => {
    setError(null)
  }, [])
  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    cleanError()
    setLoading(true)
    try {
      const response = await fetch(url, { method, body, headers })
      if (!response.ok) {
        throw new Error(response.statusText || `Request ${method} : ${url} problem`)
      }
      const data = await response.json()
      setLoading(false)
      return data
    } catch (error) {
      setLoading(false)
      setError(error.message)
      throw error
    }

  }, [])
  return { loading, request, error, cleanError }
}