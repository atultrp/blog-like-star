import React, { useEffect, useState } from 'react'
import BlogItem from './BlogItem'
import BlogItem2 from './BlogItem2'

const BlogPage = () => {

  // const blogData = [
  //   {
  //     id: 1,
  //     imageSrc: "assets/avatar0.png",
  //     category: "Personal",
  //     author: "Atul Tripathi",
  //     date: "14th Oct, 2022",
  //     title: "Title of the Blog",
  //     description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
  //     clickAction: "/fullBlog"
  //   },
  //   {
  //     id: 1,
  //     imageSrc: "assets/avatar1.png",
  //     category: "Personal",
  //     author: "Atul Tripathi",
  //     date: "14th Oct, 2022",
  //     title: "Title of the Blog",
  //     description: "Blue bottle crucifix vinyegan taxidermy. Gastropub indxgo juice poutine.",
  //     clickAction: "/fullBlog"
  //   },
  //   {
  //     id: 1,
  //     imageSrc: "assets/avatar2.png",
  //     category: "Tech",
  //     author: "Atul Tripathi",
  //     date: "14th Oct, 2022",
  //     title: "Title of the Blog",
  //     description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine. Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. GastropubBlue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub",
  //     clickAction: "/fullBlog"
  //   },
  //   {
  //     id: 1,
  //     imageSrc: "assets/avatar3.png",
  //     category: "Personal",
  //     author: "Atul Tripathi",
  //     date: "14th Oct, 2022",
  //     title: "Title of the Blog",
  //     description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
  //     clickAction: "/fullBlog"
  //   },
  //   {
  //     id: 1,
  //     imageSrc: "assets/avatar4.png",
  //     category: "Personal",
  //     author: "Atul Tripathi",
  //     date: "14th Oct, 2022",
  //     title: "Title of the Blog",
  //     description: "Blue bottle crucifix vinyl post-ironi.",
  //     clickAction: "/fullBlog"
  //   },
  //   {
  //     id: 1,
  //     imageSrc: "assets/avatar0.png",
  //     category: "Personal",
  //     author: "Atul Tripathi",
  //     date: "14th Oct, 2022",
  //     title: "Title of the Blog",
  //     description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
  //     clickAction: "/fullBlog"
  //   },
  //   {
  //     id: 1,
  //     imageSrc: "assets/avatar1.png",
  //     category: "Personal",
  //     author: "Atul Tripathi",
  //     date: "14th Oct, 2022",
  //     title: "Title of the Blog",
  //     description: "Blue bottle crucifix vinyegan taxidermy. Gastropub indxgo juice poutine.",
  //     clickAction: "/fullBlog"
  //   },
  //   {
  //     id: 1,
  //     imageSrc: "assets/avatar2.png",
  //     category: "Tech",
  //     author: "Atul Tripathi",
  //     date: "14th Oct, 2022",
  //     title: "Title of the Blog",
  //     description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine. Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. GastropubBlue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub",
  //     clickAction: "/fullBlog"
  //   },
  //   {
  //     id: 1,
  //     imageSrc: "assets/avatar3.png",
  //     category: "Personal",
  //     author: "Atul Tripathi",
  //     date: "14th Oct, 2022",
  //     title: "Title of the Blog",
  //     description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
  //     clickAction: "/fullBlog"
  //   },
  //   {
  //     id: 1,
  //     imageSrc: "assets/avatar4.png",
  //     category: "Personal",
  //     author: "Atul Tripathi",
  //     date: "14th Oct, 2022",
  //     title: "Title of the Blog",
  //     description: "Blue bottle crucifix vinyl post-ironi.",
  //     clickAction: "/fullBlog"
  //   },
  // ]

  const [blogData, setBlogData] = useState()
  useEffect(() => {
    const origin = window.location.href;
    fetch(`${origin}/api/get-blogs`).then(res => {
      return res.json();
    })
      .then((data) => {
        console.log("api Data", data)
        setBlogData(data)
      })
  }, [])

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
        {blogData?.map((item) => {
          return <BlogItem2 blogData={item} />
        })}
      </div>
    </div>
  )
}

export default BlogPage