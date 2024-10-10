import { ReactNode } from "react";

type Props = { children: ReactNode; modal: ReactNode };

export default function beforeLoginLayout({ children, modal }: Props) {
  return (
    <>
      <div>before Login Layout</div>
      <div>{children}</div>
      <div>{modal}</div>
    </>
  );
}
