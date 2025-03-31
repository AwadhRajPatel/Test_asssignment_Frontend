import { useEffect, useState } from "react";
import { fetchUserPosts } from "../api";
import PostCard from "../components/PostCard";

const Profile = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getUserPosts = async () => {
      const { data } = await fetchUserPosts();
      setPosts(data);
    };
    getUserPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Posts</h2>
      <div className="row g-4">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="col-md-4 col-sm-6 col-12 d-flex justify-content-center">
              <PostCard post={post} setPosts={setPosts} canEdit={true} />
            </div>
          ))
        ) : (
          <p className="text-center">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
