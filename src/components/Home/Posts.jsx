import { fetchPosts } from "../../api/fetchPosts";

const resource = fetchPosts("https://jsonplaceholder.typicode.com/posts"); // it returs a promice

const Posts = () => {
  const posts = resource.read();
  console.log(posts);

  return (
    <div>
      {posts?.map((post) => {
        return (
          <div key={post.id} className="border border-gray-300 p-4 my-4">
            <h2 className="text-2xl font-bold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
