import React from 'react'
import { PostDetail } from '../components/PostDetail'
import { useParams } from 'react-router'

export const PostPage = () => {
    const { id } = useParams<{id:string}>()
  return (
   <div  className="text-center">
         <div>
           <PostDetail postId={Number(id)} />
         </div>
       </div>
  )
}
