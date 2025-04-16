import React from "react";
import { Post } from "./PostList";
import { Link } from "react-router";
import { Card } from "react-bootstrap";

interface Props {
  post: Post;
}

export const PostItem = ({ post }: Props) => {
  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <Card
          style={{
            width: "18rem",
            padding: "5px",
            backgroundColor: "black",
            color: "white",
          }}
          border="info"
        >
          <Card.Img variant="top" src={post.image_url} alt={post.title} />
          <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            {/* <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text> */}
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};
