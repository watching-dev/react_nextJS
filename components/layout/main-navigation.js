import classes from "./main-navigation.module.css";
import Link from "next/link";

import Logo from "./logo";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Logo />
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
