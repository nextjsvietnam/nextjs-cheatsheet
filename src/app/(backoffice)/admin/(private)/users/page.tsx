import Link from "next/link";

const UsersPage = () => {
  return (
    <>
      <h1>Users Page</h1>
      <Link href={"/admin/users/1"} />
    </>
  );
};

export default UsersPage;
