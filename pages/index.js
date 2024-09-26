import Hero from "../components/home-page/hero";
import FeaturePosts from "../components/home-page/feature-posts";
import { Fragment } from "react";

function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: `getting1`,
      title: `title`,
      image: `getting.png`,
      excert: `Next`,
      date: `2022-02-10`,
    },
    {
      slug: `getting2`,
      title: `title`,
      image: `getting.png`,
      excert: `Next`,
      date: `2022-02-10`,
    },
    {
      slug: `getting3`,
      title: `title`,
      image: `getting.png`,
      excert: `Next`,
      date: `2022-02-10`,
    },
  ];
  return (
    <Fragment>
      <Hero />
      <FeaturePosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
