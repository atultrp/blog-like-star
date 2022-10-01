import React from 'react'
import Input from '../shared/Input'

const CreateBlog = () => {

  // 1. Author
  // 2. Category
  // 3. Avatar
  // 4. Title of the Blog
  // 5. Desciption


  return (
    <div className='md:mx-16 my-8'>
      <h2 className='text-2xl custom-font text-rose-400 uppercase'>Create your own Blog.</h2>

      <div>
        <form className='my-5'>
          {/* <input placeholder="Message" />
          <input placeholder="Message" />
          <textarea placeholder="Message" /> */}
          <div className='grid grid-cols-2 gap-x-7'>
            <Input label="Name"/>
            <Input label="Title"/>
          </div>
        </form>
      </div>

    </div>
  )
}

export default CreateBlog