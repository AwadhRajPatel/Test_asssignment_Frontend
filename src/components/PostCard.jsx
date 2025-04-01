import { useState } from "react";
import { deletePost, updateUserPost } from "../api";

const PostCard = ({ post, setPosts, canEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(post.title);
  const [editedContent, setEditedContent] = useState(post.content);

  // Handle Delete
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      await deletePost(post._id);
      setPosts((prevPosts) => prevPosts.filter((p) => p._id !== post._id));
    }
  };

  // Handle Save Edit
  const handleSave = async () => {
    const updatedPost = { title: editedTitle, content: editedContent };
    const { data } = await updateUserPost(post._id, updatedPost);

    setPosts((prevPosts) => prevPosts.map((p) => (p._id === post._id ? data : p)));
    setIsEditing(false);
  };

  return (
    <div >
      <div className="card shadow-lg border-0 rounded-4 overflow-hidden" style={{ width: "280px", height: "400px" }}>
        {/*Taller Image with Rounded Corners */}
        <div className="position-relative">
          <img
            // src={`${process.env.REACT_APP_BASE_URL}${post.image}`}
            src={post.image} // Fixed the issue here
            className="card-img-top object-fit-cover"
            style={{ height: "250px", objectFit: "cover", borderBottom: "3px solid #007bff" }}
            alt={post.title}
          />
        </div>

        <div className="card-body text-center  justify-content-between">
          {isEditing ? (
            <>
              <input
                type="text"
                className="form-control mb-2"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <textarea
                className="form-control mb-2"
                rows="3"
                style={{ height: "43px" }}
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
              />
              <button className="btn btn-success me-2" onClick={handleSave}>
                ✅ Save
              </button>
              <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>
                ❌ Cancel
              </button>
            </>
          ) : (
            <>
              <h5 className="card-title fw-bold">{post.title}</h5>
              <p className="card-text text-muted small">{post.content}</p>
            </>
          )}

          {canEdit && !isEditing && (
            <div className="d-flex justify-content-center">
              <button className="btn btn-outline-primary me-2" onClick={() => setIsEditing(true)}>
                ✏️ Edit
              </button>
              <button className="btn btn-outline-danger" onClick={handleDelete}>
                🗑️ Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
