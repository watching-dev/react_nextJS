export default function afterLoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>after login layout</div>
      <div>{children}</div>
    </>
  );
}
