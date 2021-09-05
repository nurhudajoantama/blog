import AniLink from "gatsby-plugin-transition-link/AniLink";
import React from "react";

function BreadcrumbLink({ to, children }) {
  return (
    <AniLink paintDrip to={to} className="hover:text-blue-500">
      {children}
    </AniLink>
  );
}

export default function Breadcrumb() {
  const paths = typeof window !== "undefined" ? window.location.pathname.replaceAll("/", " ").trim().split(" ") : [];
  return (
    <div className="mx-auto max-w-screen-md text-gray-500 my-6 text-sm px-5">
      <BreadcrumbLink to="/">Nurhuda Joantama</BreadcrumbLink>
      {paths.map((path, index) => {
        if (index === 0) {
          return (
            <React.Fragment key={index}>
              {" "}
              / <BreadcrumbLink to={"/" + path}>{path}</BreadcrumbLink>
            </React.Fragment>
          );
        } else {
          let result = "";
          for (let resultIndex = 0; resultIndex <= index; resultIndex++) {
            result += "/" + paths[resultIndex];
          }
          return (
            <React.Fragment key={index}>
              {" "}
              / <BreadcrumbLink to={result}>{path}</BreadcrumbLink>
            </React.Fragment>
          );
        }
      })}
    </div>
  );
}
