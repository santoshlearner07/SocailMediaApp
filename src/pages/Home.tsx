import React from 'react'
import { PostList } from '../components/PostList'

function Home() {
  return (
    <div  className="text-center">
      <h2>Recent Post</h2>
      <div>
        <PostList />
      </div>
    </div>
  )
}

export default Home