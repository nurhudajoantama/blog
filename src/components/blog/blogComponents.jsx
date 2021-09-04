import React from "react";
import "./blogComponents.css";

function em(props) {
  // class italic tailwind
  return (
    <em className="italic" {...props}>
      {props.children}
    </em>
  );
}

function strong(props) {
  return (
    <strong className="font-bold" {...props}>
      {props.children}
    </strong>
  );
}

function p(props) {
  return (
    <p className="text-lg leading-relaxed tracking-wide my-7" {...props}>
      {props.children}
    </p>
  );
}

function h1(props) {
  return (
    <h1 className="font-bold text-3xl" {...props}>
      {props.children}
    </h1>
  );
}
function h2(props) {
  return (
    <h2 className="text-3xl" {...props}>
      {props.children}
    </h2>
  );
}
function h3(props) {
  return (
    <h3 className="font-bold text-2xl" {...props}>
      {props.children}
    </h3>
  );
}
function h4(props) {
  return (
    <h4 className="text-2xl" {...props}>
      {props.children}
    </h4>
  );
}
function h5(props) {
  return (
    <h5 className="font-bold text-xl" {...props}>
      {props.children}
    </h5>
  );
}
function h6(props) {
  return (
    <h6 className="text-xl" {...props}>
      {props.children}
    </h6>
  );
}

function img(props) {
  return <img className="w-full h-auto my-7" alt={props.alt} {...props} />;
}

function ul(props) {
  return (
    <ul className="list-disc list-inside relative left-3" {...props}>
      {props.children}
    </ul>
  );
}

function ol(props) {
  return <ol className="list-decimal list-inside relative left-3">{props.children}</ol>;
}

function blockquote(props) {
  return (
    <blockquote className="border-l-4 pl-2 border-blue-500" {...props}>
      {props.children}
    </blockquote>
  );
}

const blogComponents = { em, strong, p, h1, h2, h3, h4, h5, h6, img, ul, ol, blockquote };
export default blogComponents;
