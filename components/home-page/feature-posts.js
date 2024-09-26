import PostGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

function FeaturePosts(props) {
  return (
    <section className={classes.latest}>
      <h2>hohoho</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturePosts;
