// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      "id": 1,
      "imageSrc": "assets/avatar0.png",
      "category": "Personal",
      "author": "Atul Tripathi",
      "date": "14th Oct, 2022",
      "title": "Title of the Blog",
      "description": "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
      "clickAction": "/fullBlog"
    },
  ])
}