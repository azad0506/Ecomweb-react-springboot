import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Oops!</h1>
      <p>{error?.statusText || "Page not found (you are searching wrong url)"}</p>
      <p>{error?.message}</p>
      {/* <li ><Link to="/">go to homepage</Link> </li> */}
      <p>
        <Link to="/" style={{ color: "blue", textDecoration: "underline" }}>
          Go to Homepage
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
