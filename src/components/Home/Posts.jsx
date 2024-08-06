import { fetchPosts } from "../../api/fetchPosts";

const resource = fetchPosts("https://jsonplaceholder.typicode.com/posts");

const Posts = () => {
    
  return <div>Posts</div>;
};

export default Posts;
