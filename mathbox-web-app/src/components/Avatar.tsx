import * as React from "react";

const Avatar: React.FunctionComponent<{ className?: string }> = function ({
  className,
}) {
  return (
    <img
      src="https://images.unsplash.com/photo-1557296387-5358ad7997bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=694&q=80"
      alt="avatar"
      className={`rounded-full ${className}`}
    />
  );
};

export default Avatar;
