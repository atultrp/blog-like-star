import React from 'react'
import useSWR from 'swr'

const test = () => {

  const { data, error } = useSWR("/api/test", (url) =>
    fetch(url).then((res) => res.json())
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div>
      {data.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </div>
  )
}

export default test