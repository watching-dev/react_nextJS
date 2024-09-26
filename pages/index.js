import Hero from "../components/home-page/hero";
import FeaturePosts from "../components/home-page/feature-posts";
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturePosts />
    </Fragment>
  );
}

export default HomePage;
