import { Suspense } from "react";
import Posts from "./Posts";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<div className="text-7xl "> Loading ... </div>}>
        <Posts />
      </Suspense>
    </div>
  );
};

export default Home;
