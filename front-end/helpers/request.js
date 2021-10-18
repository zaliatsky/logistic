const request = (url, method = 'GET', data ) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
}

export default request
