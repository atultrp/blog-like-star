import React from 'react'
import FullBlogPage from '../components/Blog/FullBlogPage'

const fullBlog = () => {

  const blogData = {
    id: 1,
    imageSrc: "assets/avatar4.png",
    category: "Personal",
    author: "Atul Tripathi",
    date: "14th Oct, 2022",
    title: "Title of the Blog",
    description: "Blue bottle crucifix vinyl post-ironi.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, eius nesciunt? Laborum consequuntur id assumenda dolore iusto atque rem non maiores ex, eligendi dolorem possimus libero vero qui voluptatem omnis facilis sequi nemo, ut sit excepturi ipsam. Omnis repellendus quo quae dolor quasi culpa architecto, quia mollitia vero pariatur, nemo soluta dicta esse ipsa itaque rerum quas aut commodi voluptates consequatur. Unde aliquam porro modi laboriosam? Porro voluptates voluptatibus dicta aliquid at deleniti obcaecati, delectus labore officia, impedit, nihil sed laudantium? Iste adipisci illum alias quas perspiciatis ipsum et eveniet tempore exercitationem illo, blanditiis similique rem asperiores porro possimus impedit qui, laborum in distinctio numquam atque, deleniti dicta fugiat. Sunt alias magni, labore dolore autem incidunt id facilis vitae fugit tempore recusandae officia? Laborum, delectus quis ratione dignissimos enim ipsam placeat quam maxime nostrum similique sapiente minima eveniet culpa suscipit nihil animi eum pariatur nesciunt, quae esse dolor quibusdam labore? Eaque natus debitis quibusdam laudantium inventore asperiores, tempora similique nostrum sit ipsum, voluptatum a obcaecati illo suscipit autem hic minima velit architecto perferendis fugit numquam commodi? Amet labore obcaecati nisi! Molestias eveniet, illo aut aperiam iste nam assumenda corrupti, quod quidem exercitationem illum suscipit voluptas accusantium repellendus itaque ex molestiae. Eveniet dolorem esse explicabo quidem id non nihil, molestias, ab debitis saepe magni ut illum possimus quibusdam optio ipsum placeat, minus at. Aut inventore, unde ex corrupti, quas amet fuga nam voluptatum iste dolore laudantium! Debitis deleniti commodi placeat sequi laudantium qui inventore, dicta earum doloribus? Odit ipsa voluptas laboriosam!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, eius nesciunt? Laborum consequuntur id assumenda dolore iusto atque rem non maiores ex, eligendi dolorem possimus libero vero qui voluptatem omnis facilis sequi nemo, ut sit excepturi ipsam. Omnis repellendus quo quae dolor quasi culpa architecto, quia mollitia vero pariatur, nemo soluta dicta esse ipsa itaque rerum quas aut commodi voluptates consequatur. Unde aliquam porro modi laboriosam? Porro voluptates voluptatibus dicta aliquid at deleniti obcaecati, delectus labore officia, impedit, nihil sed laudantium? Iste adipisci illum alias quas perspiciatis ipsum et eveniet tempore exercitationem illo, blanditiis similique rem asperiores porro possimus impedit qui, laborum in distinctio numquam atque, deleniti dicta fugiat. Sunt alias magni, labore dolore autem incidunt id facilis vitae fugit tempore recusandae officia? Laborum, delectus quis ratione dignissimos enim ipsam placeat quam maxime nostrum similique sapiente minima eveniet culpa suscipit nihil animi eum pariatur nesciunt, quae esse dolor quibusdam labore? Eaque natus debitis quibusdam laudantium inventore asperiores, tempora similique nostrum sit ipsum, voluptatum a obcaecati illo suscipit autem hic minima velit architecto perferendis fugit numquam commodi? Amet labore obcaecati nisi! Molestias eveniet, illo aut aperiam iste nam assumenda corrupti, quod quidem exercitationem illum suscipit voluptas accusantium repellendus itaque ex molestiae. Eveniet dolorem esse explicabo quidem id non nihil, molestias, ab debitis saepe magni ut illum possimus quibusdam optio ipsum placeat, minus at. Aut inventore, unde ex corrupti, quas amet fuga nam voluptatum iste dolore laudantium! Debitis deleniti commodi placeat sequi laudantium qui inventore, dicta earum doloribus? Odit ipsa voluptas laboriosam!",
    clickAction: "/fullBlog"
  }

  return (
    <div>
      <FullBlogPage blogData={blogData} />
    </div>
  )
}

export default fullBlog