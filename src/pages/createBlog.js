import React, { useState } from 'react'
import CreateBlog from '../components/Blog/CreateBlog'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../firebase/config'
import { getDateFormat, getLocalStorage, randomNum } from '../components/helper/utils'
import { useRouter } from 'next/router'

const createBlog = () => {
  const dbInstance = collection(database, 'blogsData');
  const router = useRouter();
  const user = getLocalStorage('user')

  const handleBlogSubmit = async (data) => {
    let blog = {
      ...data,
      imageSrc: `assets/avatar${randomNum(17)}.png`,
      date: getDateFormat(),
      likes: 0,
      userID: user?.userID,
      time: Date.now()
    }
    await addDoc(dbInstance, { ...blog })
    router.push(`/fullBlog/?id=${id}`);
  }

  return (
    <div className='min-h-screen'>
      <CreateBlog handleBlogSubmit={handleBlogSubmit} />
    </div>
  )
}

export default createBlog