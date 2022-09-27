import React from 'react'
import BlogItem from './BlogItem'

const BlogPage = () => {

  const blogData = [
    {
      id: 1,
      imageSrc: "assets/avatar0.png",
      author: "Atul Tripathi",
      date: "14th Oct, 2022",
      title: "Title of the Blog",
      description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
    },
    {
      id: 1,
      imageSrc: "assets/avatar0.png",
      author: "Atul Tripathi",
      date: "14th Oct, 2022",
      title: "Title of the Blog",
      description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
    },
    {
      id: 1,
      imageSrc: "assets/avatar0.png",
      author: "Atul Tripathi",
      date: "14th Oct, 2022",
      title: "Title of the Blog",
      description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
    },
    {
      id: 1,
      imageSrc: "assets/avatar0.png",
      author: "Atul Tripathi",
      date: "14th Oct, 2022",
      title: "Title of the Blog",
      description: "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine."
    },
    {
      id: 1,
      imageSrc: "assets/avatar0.png",
      author: "Atul Tripathi",
      date: "14th Oct, 2022",
      title: "Title of the Blog",
      description: "Blue bottle crucifix vinyl post-ironi."
    },
  ]

  return (
    <div className="px-16 py-6">
      <h2 className="text-4xl custom-font uppercase">Blogs</h2>
      <p className='text-base mt-1'>Take a look in recent Blogs.</p>
      <div className='flex flex-wrap my-4'>
        {blogData.map((item) => {
          return <div className='sm:w-1/2'>
            <BlogItem blogData={item} />
          </div>
        })}
      </div>
    </div>
  )
}

export default BlogPage