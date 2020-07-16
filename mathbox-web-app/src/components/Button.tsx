import * as React from "react";
import firebase from "firebase/app";
import { auth } from "../firebase";
import { ReactComponent as Google } from "../assets/img/google.svg";
import { useHistory } from "react-router-dom";

const Button: React.FunctionComponent<{
  className?: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}> = ({ children, className, onClick }) => (
  <button
    className={`text-xl py-1 px-4 rounded-lg  border-2 border-gray-800 shadow-lg font-medium focus:outline-none focus:shadow-outline focus:border-opacity-0 hover:border-opacity-0 hover:shadow-outline ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);

const SignInWtihGoogleButton: React.FunctionComponent<{
  className?: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
}> = ({ children, className, onClick }) => {
  const { push } = useHistory();
  const signInWithPopUp = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    try {
      await auth.signInWithPopup(provider);
      push("/boxes");
    } catch (e) {}
  };
  return (
    <Button className={` ${className}`} onClick={signInWithPopUp}>
      <span className="ml-4">
        <Google className="w-5 h-5 mt-2 mr-4"></Google>
      </span>
      <span>Sign In With Google</span>
      {children}
    </Button>
  );
};

export { Button, SignInWtihGoogleButton };
