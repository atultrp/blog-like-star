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

      <div className="mt-20 max-h-screen">
        <h2 className="custom-font uppercase text-6xl w-1/2 mx-auto leading-snug text-center tracking-wide">Turn your thoughts into a blog.</h2>
        <p className="w-1/2 text-xl mx-auto text-center leading-normal mt-4">
          Share your thoughts using the <span>"Blog Like Star"</span> without sharing your personal information.
        </p>

        <div className="flex space-x-6 justify-center my-8">
          <button className="text-[#1b1b1b] bg-white px-6 py-2 rounded-full font-bold hover:text-white hover:bg-[#1b1b1b] border-2 hover:duration-300 hover:border-white uppercase flex space-x-2 items-center">
            <Link href={"/blog"} >
              <>
                <FaPenNib className="text-lg" />
                <span>Blog</span>
              </>
            </Link>
          </button>
          <button className="text-[#1b1b1b] bg-white px-6 py-2 rounded-full font-bold hover:text-white hover:bg-[#1b1b1b] border-2 hover:duration-300 hover:border-white uppercase flex space-x-2 items-center">
            <BiNotepad className="text-xl" />
            <span>Explore</span>
          </button>
        </div>

        <div className="ml-16 mt-10 w-1/2">
          <h2 className="custom-font uppercase text-2xl ">Quote of the Day</h2>
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
