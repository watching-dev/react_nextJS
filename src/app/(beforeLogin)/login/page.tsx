"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import styles from "@/app/page.module.css";
import zlogo from "../../../../public/zlogo.png";

export default function IFlowBeforeLogin() {
  const router = useRouter();
  router.replace("/i/flow/login");
  // router.push 로 했을 경우 바로 전 단계로 감
  // router.replace 로 했을 경우 전전 단계로 감
  // 문제는 리다이렉트 경우 push는 다시 리다이렉트 시키기 때문에 계속 제자리 이므로 페이지 변경이 안됨
  // replace는 바로 전 단계를 바꿔버림

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
