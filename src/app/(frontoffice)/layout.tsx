import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const FrontOfficeLayout = (props: PropsWithChildren) => {
  return (
    <>
      <nav>Front Layout</nav>
      <aside>Sidebar</aside>
      <main>{props.children}</main>
    </>
  );
};

export default FrontOfficeLayout;
