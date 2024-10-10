import { redirect } from "next/navigation";

export default function IFlowBeforeLogin() {
  redirect("/i/flow/login");
}
