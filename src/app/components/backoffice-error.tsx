// components/AdminError.tsx
import { ErrorProps } from "next/error";
import AdminPrivateLayout from "../(backoffice)/admin/(private)/layout";

const BackOfficeError = ({ statusCode }: ErrorProps) => {
  return (
    <AdminPrivateLayout>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An client-side error occurred"}
      </h1>
    </AdminPrivateLayout>
  );
};

export default BackOfficeError;
