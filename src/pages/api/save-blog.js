import fs from "fs";
import data from "../../data/data.json";

export default (req, res) => {

  let monthsArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  let randomIndex = Math.floor(Math.random() * 18);

  const DateFormatFunction = (date) => {
    const newDate = new Date(date);
    const month = newDate.getMonth();
    const day = newDate.getDate();
    const year = newDate.getFullYear();
    const formattedDate = `${day}th ${monthsArray[month]}, ${year}`;
    return formattedDate;
  }

  const newBlog = {
    "id": data.length + 1,
    "imageSrc": `assets/avatar${randomIndex}.png`,
    "category": req.body.category ? req.body.category : "General",
    "author": req.body.author ? req.body.author : "Unknown",
    "date": DateFormatFunction(new Date()),
    "title": req.body.title,
    "content": req.body.content
  };

  data.push(newBlog);
  console.log("data", data);

  fs.writeFileSync("src/data/data.json", Buffer.from(JSON.stringify(data)).toString());

  res.status(200).json({ message: "Blog added successfully." });
};