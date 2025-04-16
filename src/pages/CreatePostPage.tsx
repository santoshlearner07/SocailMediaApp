import React from "react";
import { CreatePost } from "../components/CreatePost";

function CreatePostPage() {
  return (
    <div>
      <h2 className="text-center" style={{color:"voilet"}}>Create new Post</h2>
      <CreatePost />
    </div>
  );
}

export default CreatePostPage;
