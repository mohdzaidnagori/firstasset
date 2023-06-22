const storeToken = (value) => {
    const hash = btoa(value)
    localStorage.setItem('token', hash)
  }
  const getToken = () => {
    let token = localStorage.getItem('token')
    return atob(token)
  }
  const removeToken = (value) => {
    localStorage.removeItem(value)
  }
  
  export { storeToken, getToken, removeToken }