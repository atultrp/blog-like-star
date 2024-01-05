import React, { useEffect, useRef, useState } from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import { BsWhatsapp } from 'react-icons/bs'
import { TiSocialTwitter } from 'react-icons/ti'
import {
  WhatsappShareButton,
  TwitterShareButton,
} from 'next-share';
import { HiDotsVertical } from 'react-icons/hi'
import { useRouter } from 'next/router';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { database } from '../../firebase/config'
import { getLocalStorage, setLocalStorage } from '../helper/utils';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { AiTwotoneEdit } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const BlogItem2 = ({ blogData, setIsAnyChange }) => {
  const [likeState, setLikeState] = useState(false)
  const [likeCount, setLikeCount] = useState(parseInt(blogData?.likes))
  const router = useRouter();
  const user = getLocalStorage('user')
  const [openOptions, setOpenOptions] = useState(false)
  const optionRef = useRef();
  const [openConfirmationPopup, setOpenConfirmationPopup] = useState(false)

  useOnClickOutside(optionRef, () => {
    setOpenOptions(false)
  });

  // handling like and unlike

  const handleLikeClick = (likeFlag) => {
    setLikeState(likeFlag)
    setLikeCount(likeFlag ? likeCount + 1 : likeCount - 1)
    let userData = getLocalStorage('user')
    setLocalStorage('user', { ...userData, [blogData?.id]: likeFlag })
  }

  const updateLikeCount = () => {
    updateDoc(doc(database, "blogsData", blogData?.id), {
      likes: likeCount
    });
  }

  useEffect(() => {
    updateLikeCount()
  }, [likeCount])

  useEffect(() => {
    let userData = getLocalStorage('user')
    if (userData[blogData?.id]) {
      setLikeState(true)
    } else {
      setLikeState(false)
    }
  }, [])

  // handling read more click

  const handleReadMoreClick = (id) => {
    router.push(`/fullBlog/?id=${id}`)
  }

  // handling delete blog

  const deleteBlog = async () => {
    await deleteDoc(doc(database, "blogsData", blogData?.id))
    setOpenConfirmationPopup(false)
    setOpenOptions(false)
    setIsAnyChange(true)
  }

  return (
    <div className="px-2 py-4 md:px-12 md:py-6 my-2 min-w-full md:min-w-0 md:w-1/2 flex flex-col items-start md:hover:shadow-xl rounded-2xl">
      {/* User Details */}
      <div className="flex items-start justify-between w-full">
        <div className='flex'>
          <img alt="blog" src={blogData.imageSrc} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
          <span className="flex-grow flex flex-col pl-4">
            <span className="title-font font-medium text-gray-900">{blogData.author}</span>
            <span className="text-gray-400 text-xs tracking-widest mt-0.5">{blogData.date}</span>
          </span>
        </div>
        {/* Category */}
        <div className='flex items-center space-x-4'>
          <div className="py-1 px-2 rounded bg-gradient-to-t from-rose-500 to-pink-400 text-white text-xs font-medium tracking-widest uppercase">{blogData.category}</div>
          {user?.userID === blogData?.userID && <div ref={optionRef} className='relative'>
            <HiDotsVertical className='text-rose-500 font-bold text-xl cursor-pointer' onClick={() => { setOpenOptions(!openOptions) }} />
            {openOptions && <div className='relative'>
              <div className="absolute right-0 overflow-hidden w-32 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                <div
                  className="flex items-center space-x-2 py-2 px-3 cursor-pointer hover:bg-gradient-to-t from-rose-500 to-pink-400 hover:text-white"
                  onClick={() => router.push(`/editBlog/?id=${blogData?.id}`)}
                >
                  <AiTwotoneEdit />
                  <span className='text-sm font-medium'>Edit</span>
                </div>
                <div
                  className="flex items-center space-x-2 py-2 px-3 cursor-pointer hover:bg-gradient-to-t from-rose-500 to-pink-400 hover:text-white"
                  onClick={() => setOpenConfirmationPopup(true)}
                >
                  <MdDelete />
                  <span className='text-sm font-medium'>Delete</span>
                </div>
              </div>
            </div>}
            {openConfirmationPopup && <div className='absolute right-0 overflow-hidden w-60 px-3 py-3 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5'>
              <p className='text-sm pb-3'>
                Are you sure you want to delete this blog?
              </p>
              <div className='flex justify-end space-x-4'>
                <button
                  className='py-1 px-2 rounded bg-gradient-to-t from-rose-500 to-pink-400 text-white text-xs font-medium tracking-widest'
                  onClick={() => {
                    setOpenConfirmationPopup(false)
                    setOpenOptions(false)
                  }}
                >
                  Cancel
                </button>
                <button
                  className='py-1 px-2 rounded bg-gradient-to-t from-violet-500 to-violet-400 text-white text-xs font-medium tracking-widest'
                  onClick={() => deleteBlog()}
                >
                  Delete
                </button>
              </div>
            </div>}
          </div>}
        </div>
      </div>

      {/* Title */}
      <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{blogData.title}</h2>

      {/* Blog Content */}
      <p className="leading-relaxed mb-8 line-clamp-4">{blogData.content}</p>

      {/* Bottom part */}
      <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
        {/* Read more */}
        <a onClick={() => handleReadMoreClick(blogData?.id)} className="text-indigo-500 inline-flex items-center cursor-pointer duration-300 hover:translate-x-1">Read More
          <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </a>
        <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1">
          {likeState ? <FcLike className='text-2xl cursor-pointer hover:scale-125 duration-300' onClick={() => handleLikeClick(false)} /> : <FcLikePlaceholder className='text-2xl cursor-pointer hover:scale-125 duration-300' onClick={() => handleLikeClick(true)} />}
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