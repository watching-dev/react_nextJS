import Image from "next/image";
import zlogo from "../../../public/zlogo.png";
import Link from "next/link";

import styles from "@/app/page.module.css";

export default function Home() {
  return (
    <>
      <div>Root Page</div>
      <div className={styles.container}>
        <div className={styles.left}>
          <Image src={zlogo} alt="zlogo"></Image>
        </div>
        <div className={styles.right}>
          <h2>지금 가입하세요</h2>
          <Link href="/i/flow/signup" className={styles.signup}>
            계정 만들기
          </Link>
          <h3>계정이 있나요?</h3>
          <Link className={styles.login} href="/login">
            로그인 하기
          </Link>
        </div>
      </div>
    </>
  );
}
