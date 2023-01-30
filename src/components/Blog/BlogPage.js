import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import BlogItem2 from './BlogItem2'
import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((res) => res.json());
// import jsonBlogData from './../../json/data.json'

const BlogPage = () => {
  const [blogData, setBlogData] = useState()

  const { data, error } = useSWR("/api/get-blogs", (url) =>
    fetch(url).then((res) => res.json())
  );

  return (
    <div className="px-4 md:px-16 py-10 md:py-6">
      <h2 className="text-4xl custom-font uppercase text-center md:text-left bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text font-semibold">Blogs</h2>
      <p className='text-base mt-1 text-center md:text-left'>Take a look in recent Blogs.</p>
      <div className='my-4 flex flex-wrap'>
        {data && data?.map((item) => {
          console.log("item", item)
          return <BlogItem2 blogData={item} />
        })}
      </div>
    </div>
  )
}

export default BlogPage