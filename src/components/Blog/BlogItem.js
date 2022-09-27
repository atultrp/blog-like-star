import Link from 'next/link'
import React from 'react'
import { VscDebugStackframeDot } from 'react-icons/vsc'

const BlogItem = ({ blogData }) => {
  return (
    <div className="my-3 mx-3">
      <div class="flex border-2 rounded-lg border-white border-opacity-50 p-8 sm:flex-row flex-col">
        <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
          <img src={blogData?.imageSrc} alt="" />
        </div>
        <div class="flex-grow">
          <h2 class="flex items-center mb-3">
            <div className='text-sm font-semibold'>{blogData.author}</div>
            <VscDebugStackframeDot />
            <div className='text-xs'>{blogData.date}</div>
          </h2>
          <div>
            <div className='text-lg font-semibold'>
              {blogData.title}
            </div>
            <p class="leading-relaxed text-base">
              {blogData.description}
            </p>
            <Link href={""}>
              <div class="mt-3 text-indigo-500 inline-flex items-center cursor-pointer">
                Read More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogItem