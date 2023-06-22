const storeToken = (value) => {
    const hash = btoa(value)
    localStorage.setItem('token', hash)
  }
  const getToken = () => {
    if (typeof window !== 'undefined') {
      let token = localStorage.getItem('token')
      return atob(token)
    }
  }
  const removeToken = (value) => {
    localStorage.removeItem(value)
  }
  
  export { storeToken, getToken, removeToken }