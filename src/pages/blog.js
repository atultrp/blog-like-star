import React, { useEffect, useState } from 'react'
import BlogPage from '../components/Blog/BlogPage'
import { readBlogData } from '../components/helper/request'
import { sortBlogData } from '../components/helper/utils'

const blog = () => {
  const [allBlogData, setAllBlogData] = useState([])
  const [isAnyChange, setIsAnyChange] = useState(false)

  // Reading data from firebase
  useEffect(() => {
    readBlogData().then((data) => {
      setAllBlogData(sortBlogData(data))
    })
  }, [isAnyChange])

  return (
    <>
      <BlogPage data={allBlogData} setIsAnyChange={setIsAnyChange} />
    </>
  )
}

export default blog