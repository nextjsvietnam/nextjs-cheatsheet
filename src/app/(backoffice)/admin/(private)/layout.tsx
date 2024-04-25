import { PropsWithChildren } from "react";

const AdminPrivateLayout = (props: PropsWithChildren) => {
  const { children } = props;
  return (
    <>
      <header>Head</header>
      <aside>Sidebar</aside>
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default AdminPrivateLayout;
