import React from 'react'
import Input from '../shared/Input'
import TextArea from '../shared/TextArea'
import { useForm } from "react-hook-form";

const CreateBlog = () => {

  // 1. Author
  // 2. Category
  // 3. Avatar
  // 4. Title of the Blog
  // 5. Desciption

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);



  return (
    <div className='md:mx-16 my-8'>
      <h2 className='text-2xl custom-font text-rose-400 uppercase'>Create your own Blog.</h2>

      <div>
        <form className='my-5' onSubmit={handleSubmit(onSubmit)}>

          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="authorName">
            Your Name
          </label>
          <input name='authorName' class="appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="authorName" type="text" placeholder="Jane"
            {...register("authorName", {
              maxLength: 80
            })}
          />
          {errors.authorName && <span class="text-red-500 text-xs italic">80 Characters Only!</span>}

          {/* <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="authorName">
            Title
          </label>
          <input name='authorName' class="appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="authorName" type="text" placeholder="Jane"
            {...register("authorName", {
              maxLength: 80
            })}
          />
          {errors.authorName && <span class="text-red-500 text-xs italic">80 Characters Only!</span>}

          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="authorName">
            Your Name
          </label>
          <input name='authorName' class="appearance-none block w-full border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="authorName" type="text" placeholder="Jane"
            {...register("authorName", {
              maxLength: 80
            })}
          />
          {errors.authorName && <span class="text-red-500 text-xs italic">80 Characters Only!</span>} */}


          <button type='submit'>Publish</button>
        </form>
      </div>

    </div>
  )
}

export default CreateBlog