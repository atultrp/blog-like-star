import { useRouter } from 'next/router'
import React from 'react'

const fullBlog = () => {
  const router = useRouter()
  console.log(router.query.slug)
  return (
    <div>
      Heya
    </div>
  )
}

export default fullBlog