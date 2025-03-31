import { useState } from "react";
import { uploadPost } from "../api";
import { useNavigate } from "react-router-dom";

const UploadPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    await uploadPost(formData);
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>Upload New Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control my-2" placeholder="Title" onChange={(e) => setTitle(e.target.value)} required />
        <textarea className="form-control my-2" placeholder="Content" onChange={(e) => setContent(e.target.value)} required />
        <input type="file" className="form-control my-2" onChange={(e) => setImage(e.target.files[0])} />
        <button className="btn btn-success">Upload</button>
      </form>
    </div>
  );
};

export default UploadPost;
