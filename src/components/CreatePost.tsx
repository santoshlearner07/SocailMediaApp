import React, { ChangeEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { supabase } from "../supabase-client";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

interface PostInput {
  title: string;
  content: string;
}

const createPost = async (post: PostInput, imageFile: File) => {
  const filePath = `${post.title}-${Date.now()}-${imageFile.name}`;

  const { error: uploadError } = await supabase.storage
    .from("post-images")
    .upload(filePath, imageFile);

  if (uploadError) throw new Error(uploadError.message);

  const { data: publicUrlData } = supabase.storage
    .from("post-images")
    .getPublicUrl(filePath);

  const { data, error } = await supabase
    .from("posts")
    .insert({ ...post, image_url: publicUrlData.publicUrl });

  if (error) throw new Error(error.message);
  return data;
};

export const CreatePost = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: (data: { post: PostInput; imageFile: File }) => {
      return createPost(data.post, data.imageFile);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!selectedFile) return;
    mutate({ post: { title, content }, imageFile: selectedFile });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  return (
    <Container style={{padding:"20px"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter text"
            id="title"
            onChange={(event) => setTitle(event.target.value)}
          />
        </Form.Group>
        <FloatingLabel label="Comments">
          <Form.Control
            as="textarea"
            placeholder="Enter the content"
            required
            style={{ height: '100px' }}
            onChange={(event) => setContent(event.target.value)}
          />
        </FloatingLabel>
        <Form.Group controlId="formFileMultiple" className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            type="file"
            multiple
            id="image"
            accept="image/*"
            required
            onChange={handleFileChange}
          />
        </Form.Group>
        <Button variant="outline-info" type="submit">
            {isPending ? "Creating..." : "Create Post"}
        </Button>
        {isError && <p>Error creating post.</p>}
      </Form>
    </Container>
  );
};
