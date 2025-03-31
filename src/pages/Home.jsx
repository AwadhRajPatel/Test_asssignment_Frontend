import { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const { data } = await fetchPosts();
      setPosts(data);
    };
    getPosts();
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">All Posts</h2>
      <div className="row g-3">
        {posts.map((post) => (
          <div key={post._id} className="col-md-3 col-sm-6 col-12 d-flex justify-content-center">
            <PostCard post={post} setPosts={setPosts} canEdit={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
