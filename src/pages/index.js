import Head from 'next/head'
// import { RiSingleQuotesL, RiSingleQuotesR } from 'react-icons/ri'
import { FaPenNib } from 'react-icons/fa'
import { BiNotepad } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import axios from 'axios';
import BlogPage from '../components/Blog/BlogPage';
import Link from 'next/link';

export default function Home() {

  const [quotesData, setQuotesData] = useState([])

  useEffect(() => {
    axios.get('https://type.fit/api/quotes')
      .then(res => {
        setQuotesData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      <Head>
        <title>Blog Like Star</title>
        <meta name="description" content="Create your blog with sharing personal information." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-3 md:mt-6">
        <img src="images/upperPagePoster.svg" alt="poster" className='w-96 md:w-[420px] mx-auto' />
        <h2 className="custom-font font-bold uppercase text-4xl md:text-6xl md:w-1/2 mx-8 md:mx-auto leading-snug text-center tracking-wide text-transparent bg-clip-text bg-gradient-to-tr from-teal-400 via-violet-500 to-teal-400">Turn your thoughts into a blog.</h2>
        <p className="md:w-1/2 text-base md:text-xl mx-8 md:mx-auto text-center leading-normal mt-4">
          Share your thoughts using the <span>"Blog Like Star"</span> without sharing your personal information.
        </p>

        <div className="flex space-x-6 justify-center my-8">
          <button className=" px-6 py-2 rounded-full font-bold text-white border-2 hover:duration-300 hover:scale-110 hover:ease-in-out uppercase flex space-x-2 items-center bg-gradient-to-t from-rose-500 to-pink-400">
            <Link href={"/blog"} >
              <>
                <FaPenNib className="text-lg" />
                <span>Blog</span>
              </>
            </Link>
          </button>
          <button className="text-[#1b1b1b] bg-white px-6 py-2 rounded-full font-bold hover:text-white border-2 hover:duration-300 hover:border-white uppercase flex space-x-2 items-center hover:bg-gradient-to-t hover:from-rose-500 hover:to-pink-400 hover:scale-110 hover:ease-in-out">
            <BiNotepad className="text-xl" />
            <span>Explore</span>
          </button>
        </div>

        <div className="mx-8 md:mx-0 md:ml-16 mt-10 md:mt-16 md:w-1/2">
          <h2 className="custom-font uppercase text-4xl font-semibold bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text">Quote of the Day</h2>
          <p>
            {quotesData[Math.floor(Math.random() * (quotesData.length + 1))]?.text}
          </p>
          <p>
            - {" "}{quotesData[Math.floor(Math.random() * (quotesData.length + 1))]?.author}
          </p>
        </div>

        <BlogPage />
      </div>
    </div>
  )
}
