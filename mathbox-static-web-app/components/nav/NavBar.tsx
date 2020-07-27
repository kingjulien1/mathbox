import Package from "../../public/icons/package.svg";
import User from "../../public/icons/user-line.svg";

export default function NavBar() {
  return (
    <nav className="py-2 px-6 w-full h-10 bg-gray-900 text-gray-200 flex items-center">
      <Package className="w-6 h-6 cursor-pointer"></Package>
      <span className="ml-4 flex flex-auto justify-center sm:justify-start truncate">
        Untitled Document
      </span>
      <div className="flex">
        <User className="w-6 h-6 cursor-pointer"></User>
      </div>
    </nav>
  );
}
