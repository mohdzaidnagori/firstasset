const storeToken = (value,name) => {
    localStorage.setItem(name, value)
  }
  const getToken = (name) => {
    if (typeof window !== 'undefined') {
      let token = localStorage.getItem(name)
      return (token)
    }
  }
  const removeToken = (name) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(name)
    }
   
  }
  
  export { storeToken, getToken, removeToken }