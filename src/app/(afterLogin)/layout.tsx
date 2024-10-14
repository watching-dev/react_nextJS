import Link from "next/link";
import styles from "./layout.module.css";
import Image from "next/image";
import ZLogo from "../../../public/zlogo.png";
import NavMenu from "./_component/NavMenu";
import LogoutButton from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecommend";

export default function afterLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>after login layout</div>
      <div className={styles.container}>
        <header className={styles.leftSectionWrapper}>
          <section className={styles.leftSection}>
            <div className={styles.leftSectionFixed}>
              <Link className={styles.logo} href="/home">
                <div className={styles.logoPill}>
                  <Image src={ZLogo} alt="z-com" width={40} height={40} />
                </div>
              </Link>
              <nav>
                <ul>
                  <NavMenu />
                </ul>
                <Link href="/compose/tweet" className={styles.postButton}>
                  게시하기
                </Link>
              </nav>
              <LogoutButton />
            </div>
          </section>
        </header>
        <div className={styles.rightSectionWrapper}>
          <div className={styles.rightSectionInner}>
            <main className={styles.main}>{children}</main>
            <section className={styles.rightSection}>
              <div style={{ marginBottom: 60, width: "inherit" }}>
                <form className={styles.search}>
                  <svg width={20} viewBox="0 0 24 24" aria-hidden="true">
                    <g>
                      <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
                    </g>
                  </svg>
                  <input type="search" />
                </form>
              </div>
              <TrendSection />
              <div className={styles.followRecommend}>
                <h3>팔로우 추천</h3>
                <FollowRecommend />
                <FollowRecommend />
                <FollowRecommend />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
