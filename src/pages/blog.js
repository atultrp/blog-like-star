import React, { useEffect, useState } from 'react'
import BlogPage from '../components/Blog/BlogPage'
import useSWR from 'swr';
import BlogItem2 from '../components/Blog/BlogItem2';
const fetcher = (url) => fetch(url).then((res) => res.json());

const blog = () => {

  const { data, error } = useSWR('/api/test', fetcher);

  console.log("data res", data)

  const [blogData, setBlogData] = useState()
  useEffect(() => {
    const origin = window.location.href;
    fetch(`${origin}api/get-blogs`).then(res => {
      console.log("res 2",res)
      return res.json();
    })
      .then((data) => {
        console.log("api Data", data)
        setBlogData(data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])


  useEffect(()=> {
    const origin = window.location.href;
    fetch(`${origin}api/hello`).then(res => {
      console.log("res",res)
    })
  },[])

  return (
    <div className="px-4 md:px-16 py-10 md:py-6">
      <h2 className="text-4xl custom-font uppercase text-center md:text-left bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text font-semibold">Blogs</h2>
      <p className='text-base mt-1 text-center md:text-left'>Take a look in recent Blogs.</p>
      {/* <div className='md:flex flex-wrap my-4'>
        {blogData.map((item) => {
          return <div className='md:w-1/2'>
            <BlogItem blogData={item} />
          </div>
        })}
      </div> */}

      <div className='my-4 flex flex-wrap'>
        {data && data?.map((item) => {
          return <BlogItem2 blogData={item} />
        })}
      </div>
    </div>
  )
}

export default blog