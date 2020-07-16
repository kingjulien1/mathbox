import * as React from "react";
import { ReactComponent as Logo } from "../assets/img/package.svg";
import { ReactComponent as More } from "../assets/img/more.svg";

interface BoxCardProps {
  _id: string;
  title: string;
  lastEdited: string;
  owner?: {
    photoUrl: string;
    displayName: string;
  };
}

export const BoxCard: React.FunctionComponent<BoxCardProps> = ({
  title,
  lastEdited,
  owner,
}) => {
  return (
    <div className="py-4 sm:p-4 md:p-4 w-full md:w-1/2 lg:w-1/3 ">
      <div className="bg-gray-200 rounded-md shadow-lg p-4">
        <div className="hidden md:block bg-white rounded-t-lg h-20 "></div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex items-center md:mt-4">
            {owner ? (
              <img
                src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
                className="h-8 w-8 rounded-full object-cover"
                alt=""
              ></img>
            ) : (
              <Logo className="h-8 w-8 text-gray-900 fill-current"></Logo>
            )}
            <div className="flex flex-col justify-start ml-4">
              <p className="text-gray-900 ">{title}</p>
              <p className="text-gray-500">
                {owner
                  ? `Owner ${owner.displayName}`
                  : `last edited: ${lastEdited}`}
              </p>
            </div>
          </div>
          <More className="h-8 w-8 text-gray-900 fill-current"></More>
        </div>
      </div>
    </div>
  );
};
