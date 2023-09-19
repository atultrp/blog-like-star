export const randomNum = (n) => {
  return Math.floor(Math.random() * n);
}

export const getDateFormat = () => {
  const d = new Date()
  const monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', "Nov", 'Dec']
  const month = monthArr[d.getMonth()]
  const date = d.getDate()
  const year = d.getFullYear()
  return `${date}th ${month} ${year}`
}