import testData from "../../data/data.json"

export default (req, res) => {
  res.status(200).json(testData);
};