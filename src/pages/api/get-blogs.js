import * as fs from 'fs'

export default function handler(req, res) {

  fs.readFile('src/json/data.json','utf-8', (err, data) => {
    if(err) {
      res.status(500).json("Internal Server Error")
    }
    res.status(200).json(JSON.parse(data))
  })

}
