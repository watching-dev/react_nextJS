"use client";

import SignupModal from "@/app/(beforeLogin)/_component/SignUpModal";
import { useRouter } from "next/navigation";

export default function IFlowBeforeSignUp() {
  const router = useRouter();
  router.replace("/i/flow/signup");
  // router.push 로 했을 경우 바로 전 단계로 감
  // router.replace 로 했을 경우 전전 단계로 감
  // 문제는 리다이렉트 경우 push는 다시 리다이렉트 시키기 때문에 계속 제자리 이므로 페이지 변경이 안됨
  // replace는 바로 전 단계를 바꿔버림

  return <SignupModal />;
}
