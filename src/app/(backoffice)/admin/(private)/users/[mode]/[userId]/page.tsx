import { UsersDetailProps } from "@/types";

const UsersDetailPage = (props: UsersDetailProps) => {
  const { userId, mode } = props.params;

  return (
    <>
      <h1>
        [{mode}] Users Detail with userId = {userId}
      </h1>
    </>
  );
};

export default UsersDetailPage;
