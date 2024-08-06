import wrapPromise from "../utils/wrapPromise";

export const fetchPosts = (url) => {
  const response = fetch(url).then((response) => response.json());
  return wrapPromise(response);
};
