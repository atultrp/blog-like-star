import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { BsWhatsapp } from 'react-icons/bs'
import { TiSocialTwitter } from 'react-icons/ti'
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  TwitterShareButton,
  LinkedinIcon,
} from 'next-share';

const BlogItem2 = ({ blogData }) => {
  const [likeState, setLikeState] = useState(false)
  const [likeCount, setLikeCount] = useState(0)

  const handleLikeClick = () => {
    setLikeState(false)
    setLikeCount(likeCount - 1)
  }
  const handleUnlikeClick = () => {
    setLikeState(true)
    setLikeCount(likeCount + 1)
  }

  return (
    <div class="px-2 py-4 md:px-12 md:py-6 my-2 min-w-full md:min-w-0 md:w-1/2 flex flex-col items-start md:hover:shadow-xl rounded-2xl">
      {/* User Details */}
      <div class="flex items-start justify-between w-full">
        <div className='flex'>
          <img alt="blog" src={blogData.imageSrc} class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span class="flex-grow flex flex-col pl-4">
            <span class="title-font font-medium text-gray-900">{blogData.author}</span>
            <span class="text-gray-400 text-xs tracking-widest mt-0.5">{blogData.date}</span>
          </span>
        </div>
        {/* Category */}
        <div class=" py-1 px-2 rounded bg-gradient-to-t from-rose-500 to-pink-400 text-white text-xs font-medium tracking-widest uppercase">{blogData.category}</div>
      </div>

      {/* Title */}
      <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{blogData.title}</h2>

      {/* Blog Description */}
      <p class="leading-relaxed mb-8 line-clamp-4">{blogData.description}</p>

      {/* Bottom part */}
      <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        {/* Read more */}
        <a class="text-indigo-500 inline-flex items-center cursor-pointer">Read More
          <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <span class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1">
          {likeState ? <FcLike className='text-2xl cursor-pointer' onClick={handleLikeClick} /> : <FcLikePlaceholder className='text-2xl cursor-pointer' onClick={handleUnlikeClick} />}
          <span className='ml-1'>{likeCount}</span>
        </span>
        <WhatsappShareButton
          url={'https://blog-like-star.vercel.app'} >
          <BsWhatsapp className='text-2xl text-green-500 mr-4 hover:scale-125 ease-in-out duration-200' />
        </WhatsappShareButton>
        <TwitterShareButton
          url={'https://blog-like-star.vercel.app'} >
          <TiSocialTwitter className='text-4xl text-rose-400 mr-4 hover:scale-125 ease-in-out duration-200' />
        </TwitterShareButton>
      </div>
    </div>
  )
}

export default BlogItem2