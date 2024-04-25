import { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "NextJSCheatSheet - BackOffice",
  description: "Generated by create next app",
};

const AdminLayout = (props: PropsWithChildren) => {
  return <>{props.children} </>;
};

export default AdminLayout;
