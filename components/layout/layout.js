import MainNavigation from "./main-navigation";

function Layout(props) {
  return (
    <>
      <MainNavigation>
        <main>{props.children}</main>
      </MainNavigation>
    </>
  );
}

export default Layout;
