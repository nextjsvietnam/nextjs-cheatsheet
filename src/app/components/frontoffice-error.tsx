import { ErrorProps } from "next/error";
import FrontOfficeLayout from "../(frontoffice)/layout";

const FrontOfficeError = ({ statusCode }: ErrorProps) => {
  return (
    <FrontOfficeLayout>
      <h1>
        {statusCode
          ? `An error ${statusCode} occurred on server`
          : "An client-side error occurred"}
      </h1>
    </FrontOfficeLayout>
  );
};

export default FrontOfficeError;
