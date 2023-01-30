// import path from 'path';
// import { promises as fs } from 'fs';

// export default async function handler(req, res) {
//   const fileContents = await fs.readFile('src/json/data.json', 'utf8');
//   //Return the content of the data file in json format
//   const fileContentsData = JSON.parse(fileContents)
//   res.status(200).json(fileContentsData);
// }

import testData from "../../data/test.json"

export default (req, res) => {
  res.status(200).json(testData);
};