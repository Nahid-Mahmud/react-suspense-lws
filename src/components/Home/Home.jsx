import { Suspense } from "react";
import Posts from "./Posts";
import { ErrorBoundary } from "react-error-boundary";

const Home = () => {
  return (
    <div>
      <ErrorBoundary
        fallback={
          <>
            <div>
              <h1 className="text-7xl text-red-500 text-center">Something went wrong</h1>
            </div>
          </>
        }
      >
        <Suspense fallback={<div className="text-7xl "> Loading ... </div>}>
          <Posts />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default Home;
