import { useRouteError, UNSAFE_ErrorResponseImpl } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="max-w-lg mx-auto h-screen flex flex-col justify-center items-center gap-8">
      <h1 className="text-2xl">Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p className="text-gray-500">
        <i>
          {(error as UNSAFE_ErrorResponseImpl).statusText ||
            (error as UNSAFE_ErrorResponseImpl).data}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
