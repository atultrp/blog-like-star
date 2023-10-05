import React, { useEffect, useState } from 'react'
import Input from '../shared/Input'
import TextArea from '../shared/TextArea'
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';

const CreateBlog = ({ handleBlogSubmit, autopopulatedData }) => {

  const router = useRouter();
  const [values, setValues] = useState({})

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  useEffect(() => {
    setValues(autopopulatedData)
  }, [autopopulatedData])

  const onSubmit = (data) => {
    let blog = { ...data }
    if (data) {
      blog["category"] = blog?.category || 'General'
      blog["author"] = blog?.author || 'Anonymous'
      console.log("blog", blog)
      handleBlogSubmit(blog)
    }
  };


  return (
    <div className='md:mx-16 my-8 mx-6'>
      <h2 className='text-2xl custom-font text-rose-400 uppercase'>{autopopulatedData ? "Edit your Blog" : "Create your own Blog."}</h2>

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
                value={values?.author}
                onChange={(e) => setValues({ ...values, author: e.target.value })}
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
                value={values?.category}
                onChange={(e) => setValues({ ...values, category: e.target.value })}
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
                value={values?.title}
                onChange={(e) => setValues({ ...values, title: e.target.value })}
              />
              {!values.title && <span class="text-red-500 text-xs italic">This field is required!</span>}
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
              value={values?.content}
              onChange={(e) => setValues({ ...values, content: e.target.value })}
            />
            {!values.content && <span class="text-red-500 text-xs italic">This field is required!</span>}
          </div>

          <button type='submit' className='mt-2 px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600'>Publish</button>
        </form>
      </div>

    </div>
  )
}

export default CreateBlog