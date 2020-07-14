import * as React from "react";

const Avatar: React.FunctionComponent<{
  className?: string;
  url?: string;
  name?: string;
}> = function ({ className, url, name }) {
  return url ? (
    <img src={url} alt="avatar" className={`rounded-full ${className}`} />
  ) : (
    <div
      className={`bg-gray-700 font-semibold text-gray-100 rounded-full py-1 px-3 ${className}`}
    >
      <p>{name?.charAt(0).toUpperCase()}</p>
    </div>
  );
};

export default Avatar;
