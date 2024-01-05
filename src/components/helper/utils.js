const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", 'Dec']
export const randomNum = (n) => {
  return Math.floor(Math.random() * n);
}

export const getDateFormat = () => {
  const d = new Date()
  const month = monthArr[d.getMonth()]
  const date = d.getDate()
  const year = d.getFullYear()
  return `${date}th ${month} ${year}`
}

export const getLocalStorage = (key) => {
  if ((typeof window === "undefined")) {
    return null
  }
  return JSON.parse(window.localStorage.getItem(key))
}

export const setLocalStorage = (key, value) => {
  if ((typeof window === "undefined")) {
    return null
  }
  return window.localStorage.setItem(key, JSON.stringify(value))
}

export const sortBlogData = (data) => {
  return data.sort((a, b) => {
    return b.time - a.time
  })
}