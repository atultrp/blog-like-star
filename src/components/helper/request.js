import { collection, getDocs } from "firebase/firestore";
import { database } from "../../firebase/config";

export const readBlogData = async () => {
  const dbInstance = collection(database, 'blogsData');
  let blogData = []
  await getDocs(dbInstance)
    .then((data) => {
      blogData = data.docs.map((item) => {
        return { ...item.data(), id: item.id }
      })
    })
  return blogData
}