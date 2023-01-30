import React, { useState } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { BsArrowRight, BsWhatsapp } from 'react-icons/bs'
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
import Link from 'next/link';

const FullBlogPage = ({ blogData }) => {
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
    <div className='mx-3 px-3 md:mx-10 md:px-2 my-4'>
      <div className="md:flex items-center md:px-7 justify-between w-full border-b-2 border-gray-100 py-4 sticky top-14 md:top-[88px] z-30 bg-white">

        {/* Author Info */}
        <div className='flex'>
          <img alt="blog" src={blogData.imageSrc} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">{blogData.author}</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">{blogData.date}</span>
          </span>
        </div>

        <div className='md:flex md:items-center mt-4 md:mt-0'>
          {/* Like and Share */}
          <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
            <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1">
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

          {/* Category */}
          <div className="-mt-16 md:-mt-7 w-fit py-1 px-2 rounded bg-gradient-to-t from-rose-500 to-pink-400 text-white text-xs font-medium tracking-widest uppercase">{blogData.category}</div>

        </div>

      </div>

      {/* Title */}
      <h2 className="sm:text-3xl text-2xl md:px-7 title-font font-medium text-gray-900 mt-4 mb-4">{blogData.title}</h2>

      {/* Blog content */}
      <p className="leading-relaxed mb-8 md:px-7">{blogData.content}</p>

      <div className="cursor-pointer w-fit mx-auto my-6 md:my-12">
        <Link href={"/blog"}>
          <div className='text-rose-400 flex items-center space-x-1 hover:scale-110 duration-300 hover:underline hover:underline-offset-8'>
            <span className='font-semibold'>
              View All Blogs
            </span>
            <BsArrowRight className='text-xl' />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FullBlogPage