import React, { useEffect, useState } from 'react'
import BlogPage from '../components/Blog/BlogPage'
import useSWR from 'swr';
import BlogItem2 from '../components/Blog/BlogItem2';
const fetcher = (url) => fetch(url).then((res) => res.json());

const blog = () => {

  // const { data, error } = useSWR('/api/test', fetcher);
  // const [blogData, setBlogData] = useState(data)

  // useEffect(() => {
  //   setBlogData(data)
  // }, [data])

  // console.log("test blogdata", blogData)

  return (
    <>
      <BlogPage />
    </>
  )
}

export default blog