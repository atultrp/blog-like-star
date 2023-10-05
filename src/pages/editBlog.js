import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { readBlogData } from "../components/helper/request";
import { database } from "../firebase/config";
import { doc, updateDoc } from "firebase/firestore";
import CreateBlog from "../components/Blog/CreateBlog";

const EditBlog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState({});

  // Reading data from firebase
  useEffect(() => {
    readBlogData().then((data) => {
      data?.map((item) => {
        if (item.id === id) {
          setBlog(item);
        }
      });
    })
  }, [id])

  const handleSubmit = async (updatedData) => {
    console.log("updatedData", updatedData)
    if (updatedData) {
      updateDoc(doc(database, "blogsData", id), {
        author: updatedData?.author,
        category: updatedData?.category,
        content: updatedData?.content,
        title: updatedData?.title,
      });
      router.push(`/fullBlog/?id=${id}`);
    }
  };

  return (
    <div>
      {/* <h1>Edit Blog</h1> */}
      <CreateBlog handleBlogSubmit={(updatedData) => handleSubmit(updatedData)} autopopulatedData={blog} />
    </div>
  );
};

export default EditBlog;
