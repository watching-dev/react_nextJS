import AllPosts from "../../components/posts/all-posts";

function AllPostsPage() {
  const DUMMY_POSTS = [
    {
      slug: "getting1",
      title: "title",
      image: "getting.png",
      excert: "Next",
      date: "2022-02-10",
    },
    {
      slug: "getting2",
      title: "title",
      image: "getting.png",
      excert: "Next",
      date: "2022-02-10",
    },
    {
      slug: "getting3",
      title: "title",
      image: "getting.png",
      excert: "Next",
      date: "2022-02-10",
    },
  ];

  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
