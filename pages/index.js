import Hero from "../components/home-page/hero";
import FeaturePosts from "../components/home-page/feature-posts";
import { Fragment } from "react";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Hero />
      <FeaturePosts posts={props.posts} />
    </Fragment>
  );
}
export default HomePage;

export function getStaticProps() {
  const featuredPost = getFeaturedPosts();
  return {
    props: {
      posts: featuredPost,
    },
  };
}
