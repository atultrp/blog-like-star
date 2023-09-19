import React, { useEffect, useState } from 'react'
import Input from '../shared/Input'
import TextArea from '../shared/TextArea'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

const CreateBlog = ({ handleBlogSubmit }) => {

  // 1. Author
  // 2. Category
  // 3. Avatar
  // 4. Title of the Blog
  // 5. Content of the Blog

  const router = useRouter();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // data && fetch("/api/save-blog", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // router.push('/blog');
    let blog = { ...data }

    if (data) {
      blog["category"] = blog?.category || 'General'
      blog["author"] = blog?.author || 'Anonymous'
      handleBlogSubmit(blog)
    }
  };


  return (
    <div className='md:mx-16 my-8 mx-6'>
      <h2 className='text-2xl custom-font text-rose-400 uppercase'>Create your own Blog.</h2>

      <div>
        <form className='my-5' onSubmit={handleSubmit(onSubmit)}>

          <div className='md:grid grid-cols-2 gap-x-20 2xl:grid-cols-3'>
            <div className='mb-3'>
              {/* Author Name */}
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="author">
                Your Name
              </label>
              <input name='author' class="appearance-none block w-full border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="author" type="text" placeholder="Jane"
                {...register("author", {
                  maxLength: 80
                })}
              />
              {errors.author && <span class="text-red-500 text-xs italic">80 Characters Only!</span>}
            </div>

            {/* Category */}
            <div className='mb-3'>
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="category">
                Category
              </label>
              <input name='category' class="appearance-none block w-full border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="category" type="text" placeholder="Personal"
                {...register("category", {
                  maxLength: 40
                })}
              />
            </div>

            {/* Title of the blog */}
            <div className='mb-3'>
              <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="title">
                Title of the Blog
              </label>
              <input name='title' class="appearance-none block w-full border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="title" type="text" placeholder="Today's thought"
                {...register("title", {
                  required: true,
                })}
              />
              {errors.title && <span class="text-red-500 text-xs italic">This field is required!</span>}
            </div>
          </div>

          {/* Content of the blog */}
          <div className='mb-3'>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="content">
              Content of the Blog
            </label>
            <textarea rows={10} name='content' class="appearance-none block w-full border border-gray-500 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" id="content" type="text" placeholder="Personal"
              {...register("content", {
                required: true,
              })}
            />
            {errors.content && <span class="text-red-500 text-xs italic">This field is required!</span>}
          </div>

          <button type='submit' className='mt-2 px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600'>Publish</button>
        </form>
      </div>

    </div>
  )
}

export default CreateBlog