import Link from "next/link";

function MainNavigation() {
  return (
    <header>
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
