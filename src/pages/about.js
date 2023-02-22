import React from 'react'

const about = () => {

  const quoteByMe = [
    {
      quote: "While it's true that someone else's actions can either negatively or positively impact your life, ultimately, it's up to you to determine the direction in which you want to go. It's important to choose the path that aligns with your personal goals and values because this is your life, and you owe it to yourself to strive for excellence.",
    },
    {
      quote: "If you come across someone who genuinely cares about you, it's important not to let them go because they are the ones who truly desire to bring you authentic happiness.",
    },
    {
      quote: "It's essential to keep in mind that the perfect timing for taking action towards your personal goals will never come, as the best time to act is always the present. Therefore, make the most of the present moment and strive to do your very best to accomplish your objectives.",
    },
  ]

  return (
    <div className='mt-5 md:mt-6 mx-4 md:mx-8'>
      <h2 className="text-4xl custom-font uppercase text-left md:text-left bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text font-semibold">About Us</h2>
      <div className='mt-2'>
        <p>
          The website has a simple and clean design with a black and white color scheme, making it easy to navigate and read the content. The main page displays a list of featured blog posts with a brief summary and a thumbnail image. Clicking on a blog post takes you to a dedicated page for that post, where you can read the full content and leave comments.
        </p>
        <p>
          One interesting feature of the website is the "Blog Like Star Challenge," which encourages users to write and publish one blog post every day for 30 days. This challenge aims to help bloggers improve their writing skills, develop a habit of writing regularly, and gain more visibility for their content.
        </p>
        <p>
          In terms of functionality, the website appears to be built using Next.js, a popular React-based framework for building static and server-rendered websites. It also includes a commenting system powered by Disqus, which allows users to leave comments and engage with other readers.
        </p>
        <p>
          Overall, "Blog Like Star" seems like a promising platform for bloggers who want to showcase their writing skills and connect with like-minded individuals. The website's clean design, simple navigation, and emphasis on regular writing practice make it a useful resource for anyone looking to improve their blogging skills.
        </p>
      </div>

      <div className='mt-5'>
        <h2 className="text-2xl custom-font uppercase text-left md:text-left bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text font-semibold">Creator</h2>
        <p className="lead">
          Hey there, this fantastic website made by <strong>Atul Tripathi</strong> from India.
          My passion for software lies with dreaming up ideas and making them come true with elegant
          interfaces. I take great care in the experience, architecture, and code quality of the things I build.
          <br />
          I'm also an <strong>open-source</strong> enthusiast and maintainer. I learned a lot from the open-source community and I love how <strong>collaboration and knowledge sharing</strong> happened through open-source.
        </p>
      </div>
      <br />
      <div>
        <h2 className="text-2xl custom-font uppercase text-left md:text-left bg-gradient-to-t from-rose-500 to-pink-400 text-transparent bg-clip-text font-semibold">Some Lines from Creator</h2>
        <ul>
          {quoteByMe?.map((quote, index) => {
            return (
              <li key={index} className="mt-4 border-2 rounded-lg p-2 border-rose-400 border-l-8">
                <p className="italic font-extralight">{quote.quote}</p>
                <p className='text-end italic font-semibold text-sm'>- Atul Tripathi</p>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="my-4">
        <strong>
          Created by using coding skills with love 💙️ by - <a href="https://github.com/atultrp">
            <button type="button" className="btn btn-light">Atul Tripathi</button></a>
        </strong>
      </div>
    </div >
  )
}

export default about