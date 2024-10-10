import Image from "next/image";
import zlogo from "../../public/zlogo.png";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Root Page</div>
      <Image src={zlogo} alt="zlogo"></Image>
      <h2>지금 가입하세요</h2>
      <Link href="/i/flow/signup">계정 만들기</Link>
      <h2>계정이 있나요?</h2>
      <Link href="/login">로그인 하기</Link>
    </>
  );
}
