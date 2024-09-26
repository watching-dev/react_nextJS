import Link from "next/link";
import classes from "./post-item.module.css";
import Image from "next/image";

function PostItem(props) {
  const { title, image, excert, date, slug } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    dya: "numeric",
    month: "long",
    year: "numeric",
  });
  const imagePath = `/images/posts/${slug}/${image}`;
  return (
    <li className={classes.post}>
      <Link>
        <a>
          <div>
            <Image
              className={classes.image}
              src={imagePath}
              alt={title}
              width={300}
              height={200}
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excert}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostItem;
