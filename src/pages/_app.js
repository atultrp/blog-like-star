import { useEffect } from 'react'
import Footer from '../components/Layout/Footer'
import Header from '../components/Layout/Header'
import '../styles/globals.css'
import { getLocalStorage, setLocalStorage } from '../components/helper/utils'

function MyApp({ Component, pageProps }) {

  // Authentication

  useEffect(() => {
    if (getLocalStorage('user')) {
      console.log('user is logged in')
    } else {
      let newUser = {
        userID: 'blogStar' + Date.now()
      }
      setLocalStorage('user', JSON.stringify(newUser))
      console.log('user is not logged in')
    }
  }, [])

  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
