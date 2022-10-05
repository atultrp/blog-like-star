import * as fs from 'fs'

export default function handler(req, res) {
  var updatedData = []
  fs.readFile('src/json/data.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json("Internal Server Error")
    }
    var allBlogs = data
    // res.status(200).json(JSON.parse(data))
    updatedData = allBlogs.push({
      "id": 13948209,
      "imageSrc": "assets/avatar5.png",
      "category": "Personal",
      "author": "Atul Tripathi",
      "date": "14th Oct, 2022",
      "title": "Title of the Blog",
      "description": "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
      "clickAction": "/fullBlog"
    })
    fs.writeFile('src/json/data.json', updatedData, (err, data) => {
      console.log("data")
    })
  })

  // fs.appendFile('src/json/data.json','Heya', ()=> {
  //   console.log("done")
  // })



  res.status(200).json(updatedData)


}
