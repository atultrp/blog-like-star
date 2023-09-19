import React, { useState } from 'react'
import CreateBlog from '../components/Blog/CreateBlog'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../firebase/config'
import { getDateFormat, randomNum } from '../components/helper/utils'

const createBlog = () => {
  const dbInstance = collection(database, 'blogsData');

  const handleBlogSubmit = async (data) => {
    let blog = { ...data, imageSrc: `assets/avatar${randomNum(17)}.png`, date: getDateFormat() }
    await addDoc(dbInstance, { ...blog })
  }

  return (
    <div className='min-h-screen'>
      <CreateBlog handleBlogSubmit={handleBlogSubmit} />
    </div>
  )
}

export default createBlog